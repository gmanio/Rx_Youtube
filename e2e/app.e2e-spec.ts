import { RxYoutubePage } from './app.po';

describe('rx-youtube App', () => {
  let page: RxYoutubePage;

  beforeEach(() => {
    page = new RxYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
