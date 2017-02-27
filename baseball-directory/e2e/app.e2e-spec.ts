import { BaseballDirectoryPage } from './app.po';

describe('baseball-directory App', function() {
  let page: BaseballDirectoryPage;

  beforeEach(() => {
    page = new BaseballDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
