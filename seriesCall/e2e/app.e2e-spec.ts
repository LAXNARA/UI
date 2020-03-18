import { SeriesCallPage } from './app.po';

describe('series-call App', () => {
  let page: SeriesCallPage;

  beforeEach(() => {
    page = new SeriesCallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
