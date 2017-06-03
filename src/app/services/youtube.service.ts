import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";
import { Subject, Observable } from "rxjs";

const AppKey = "AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ";

@Injectable()
export class YoutubeService {

  private gapi;
  private oClient;
  private oYoutubeSearchList;
  private nextPageToken;
  public isEnableService = new Subject();
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
    this.oClient.setApiKey(AppKey);

    this.oClient.load("youtube", "v3", () => {
      this.oYoutubeSearchList = this.oClient.youtube.search.list;
      this.isLoadedYoutubeClient = true;
      this.isEnableService.next();
    });
  }

  public requestVideoList(option) {
    let defaultOption = {
      part: "snippet",
      type: "video",
      q: "donald",
      region: "KR",
      nextPageToken: '',
      maxResults: 20
    }

    let params = Object.assign({}, defaultOption, option);

    let source = Observable.fromPromise(this.oYoutubeSearchList(params));

    source.subscribe((res) => this.setSearchResult(res));

    return source;
  }

  public requestMoreVideoList() {
    return this.requestVideoList({ pageToken: this.nextPageToken });
  }

  private setSearchResult(res) {
    this.nextPageToken = res.nextPageToken;
  }
}
