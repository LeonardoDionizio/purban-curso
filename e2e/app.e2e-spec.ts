import { PurbanPage } from './app.po';

describe('purban App', () => {
  let page: PurbanPage;

  beforeEach(() => {
    page = new PurbanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
