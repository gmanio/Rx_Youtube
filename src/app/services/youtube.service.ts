import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";
import { Subject, Observable } from "rxjs";

@Injectable()
export class YoutubeService {
  static AppKey = "AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ";

  public isEnableService = new Subject();
  private gapi;
  private oClient;
  private request;
  private nextPageToken;
  public isLoadedYoutubeClient: boolean = false;

  constructor(private windowRef: WindowRefService) {
    this.onLoadGapi();
  }

  onLoadGapi() {
    this.gapi = this.windowRef.nativeWindow.gapi;
    this.gapi.load("client", () => this.onLoadClient());
  }

  onLoadClient() {
    this.oClient = this.gapi.client;
    this.oClient.setApiKey(YoutubeService.AppKey);

    this.oClient.load("youtube", "v3", () => {
      this.request = this.oClient.youtube.search.list;
      this.isLoadedYoutubeClient = true;
      this.isEnableService.next();
    });
  }

  public getVideos(option) {
    let initOption = {
      part: "snippet",
      type: "video",
      q: "donald",
      region: "KR",
      maxResults: 20
    }

    if ( option ) {
      initOption = Object.assign({}, initOption, option);
    }

    let source = Observable.fromPromise(this.request(initOption));

    source.subscribe((res) => this.setSearchResult(res));

    return source;
  }

  public getMoreVideos() {
    return this.getVideos({ pageToken: this.nextPageToken });
  }

  private setSearchResult(res) {
    this.nextPageToken = res.nextPageToken;
  }
}
