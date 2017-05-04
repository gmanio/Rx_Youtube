import { Injectable } from "@angular/core";
import { WindowRefService } from "./window-ref.service";

@Injectable()
export class YoutubeService {
  static APPKEY = "AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ";

  private gapi: any;
  private oClient: any;
  private request;

  constructor(private windowRef: WindowRefService) {
    this.onLoadGapi();
  }

  onLoadGapi() {
    this.gapi = this.windowRef.nativeWindow.gapi;
    this.gapi.load("client", this.onLoadClient.bind(this))
  }

  onLoadClient() {
    this.oClient = this.gapi.client;
    this.oClient.setApiKey(YoutubeService.APPKEY);

    this.oClient.load("youtube", "v3", () => {
      this.request = this.oClient.youtube.search.list;
    });
  }

  getVideos() {
    let initOption = {
      part: "snippet", //required
      type: "video",
      q: "donald",
      maxResults: 20,
      region: "KR"
    }

    return this.request(initOption);
  }
}
