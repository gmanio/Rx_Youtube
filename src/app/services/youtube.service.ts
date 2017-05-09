import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";
import { Subject, Observable } from "rxjs";

@Injectable()
export class YoutubeService {
  static AppKey = "AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ";

  private gapi: any;
  private oClient: any;
  private request;
  public isEnableService = new Subject();
  private nextPageToken: any;

  constructor(private windowRef: WindowRefService) {
    this.onLoadGapi();
  }

  onLoadGapi() {
    this.gapi = this.windowRef.nativeWindow.gapi;
    this.gapi.load("client", this.onLoadClient.bind(this))
  }

  onLoadClient() {
    this.oClient = this.gapi.client;
    this.oClient.setApiKey(YoutubeService.AppKey);

    this.oClient.load("youtube", "v3", () => {
      this.request = this.oClient.youtube.search.list;
      this.isEnableService.next();
    });
  }

  public getVideos(option) {
    let initOption = {
      part: "snippet", //required
      type: "video",
      q: "donald",
      region: "KR",
      maxResults: 20
    }

    if ( option ) {
      initOption = Object.assign({}, initOption, option);
    }

    let source = Observable.fromPromise(this.request(initOption));

    source.map(res => res['result']).subscribe(this.setSearchResult.bind(this));

    return source;
  }

  public getMoreVideos() {
    return this.getVideos({ pageToken: this.nextPageToken });
  }

  private setSearchResult(res) {
    this.nextPageToken = res.nextPageToken;
  }
}
