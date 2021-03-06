import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

const AppKey = "AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ";

declare const gapi;

@Injectable()
export class YoutubeService {
  private nextPageToken;
  private oYoutubeSearchList;
  public isEnableService = new Subject();
  public isLoadedYoutubeClient: boolean = false;
  private googleAPI: any;

  constructor() {
    this.onLoadGapi();
  }

  onLoadGapi() {
    this.googleAPI = gapi;
    this.googleAPI.load("client", () => this.onLoadClient());
  }

  onLoadClient() {
    this.googleAPI.client.setApiKey(AppKey);

    this.googleAPI.client.load("youtube", "v3", () => {
      this.oYoutubeSearchList = this.googleAPI.client.youtube.search.list;
      this.isLoadedYoutubeClient = true;
      this.isEnableService.next();
    });
  }

  public requestVideoList(option) {
    const defaultOption = {
      part: "snippet",
      type: "video",
      q: "wwdc2017",
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
