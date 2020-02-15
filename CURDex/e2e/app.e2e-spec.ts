import { CURDexPage } from './app.po';

describe('curdex App', () => {
  let page: CURDexPage;

  beforeEach(() => {
    page = new CURDexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
