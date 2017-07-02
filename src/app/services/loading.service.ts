import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoadingService {
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private app: ApplicationRef) {
  }

  public startLoading() {
    this.loaderStatus.next(true);
  }

  public stopLoading() {
    this.loaderStatus.next(false);
  }
}
