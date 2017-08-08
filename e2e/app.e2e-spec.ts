import { NgMessengerPage } from './app.po';

describe('ng-messenger App', () => {
  let page: NgMessengerPage;

  beforeEach(() => {
    page = new NgMessengerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
