import { AngularReduxPage } from './app.po';

describe('angular-redux App', () => {
  let page: AngularReduxPage;

  beforeEach(() => {
    page = new AngularReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
