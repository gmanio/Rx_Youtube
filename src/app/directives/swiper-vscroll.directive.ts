import { Directive, ElementRef, AfterViewInit, EventEmitter, Output } from "@angular/core";

declare var Swiper;

@Directive({
  selector: '[vScroll]'
})

export class SwiperVscrollDirective implements AfterViewInit {
  private oSwiper;
  private emitScrollEvent = false;

  @Output() scrollUp = new EventEmitter();
  @Output() scrollDown = new EventEmitter();
  @Output() scrollEnd = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.oSwiper = new Swiper(this.el.nativeElement, {
      scrollbar: '.swiper-scrollbar',
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      mousewheelControl: true,
      // onTouchMove: this.touchMove.bind(this),
      // onTouchStart: this.touchStart.bind(this),
      // onTouchEnd: this.touchEnd.bind(this),
      // onTransitionStart: this.transitionStart.bind(this),
      // onTransitionEnd: this.transitionEnd.bind(this)
    });
  }

  public refresh() {
    this.oSwiper.updateAutoHeight();
    this.oSwiper.update();
    this.oSwiper.scrollbar.set();
    this.oSwiper.scrollbar.setTranslate();
  }

  public setTranslate(duration, value) {
    this.oSwiper.setWrapperTransition(duration);
    this.oSwiper.setWrapperTranslate(value);
  }

  public goToBottom() {
    this.oSwiper.setWrapperTransition(0);
    this.oSwiper.setWrapperTranslate(this.oSwiper.maxTranslate());
  }

  public getScrollHeight(): number {
    return this.oSwiper.maxTranslate();
  }

  public getCurrentScroll(): number {
    return this.oSwiper.getTranslate(this.oSwiper.wrapper[0], 'y');
  }

  private touchMove(swiper, e) {
    //console.log("touchMove", this.prevScroll, swiper.getTranslate(swiper.wrapper[0], 'y'), swiper.maxTranslate());
  }

  private touchStart(swiper, e) {
    //console.log("set", swiper.translate, swiper.getTranslate(swiper.wrapper[0], 'y'));
    this.setTranslate(0, swiper.getTranslate(swiper.wrapper[0], 'y'));
    this.emitScrollEvent = false;
  }

  private touchEnd(swiper, e) {
    //console.log("touchEnd", swiper.translate, swiper.getTranslate(swiper.wrapper[0], 'y'));
  }

  private transitionStart(swiper, e) {
    //console.log("transitionStart", swiper.translate, swiper.getTranslate(swiper.wrapper[0], 'y'));
    if ( !this.emitScrollEvent && swiper.translate <= swiper.maxTranslate() ) {
      this.scrollDown.emit(swiper);
      this.emitScrollEvent = true;
    }
  }

  private transitionEnd(swiper, e) {
    //console.log("transitionEnd", this.direction, swiper.translate, swiper.getTranslate(swiper.wrapper[0], 'y'));
    if ( !this.emitScrollEvent && swiper.maxTranslate() != 0 && swiper.getTranslate(swiper.wrapper[0], 'y') == swiper.maxTranslate() ) {
      this.scrollDown.emit(swiper);
      this.emitScrollEvent = true;
    }

    if ( swiper.maxTranslate() != 0 && swiper.getTranslate(swiper.wrapper[0], 'y') == 0 ) {
      this.scrollUp.emit(swiper);
    }
  }
}
