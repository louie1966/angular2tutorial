import { Angular2tutorialPage } from './app.po';

describe('angular2tutorial App', () => {
  let page: Angular2tutorialPage;

  beforeEach(() => {
    page = new Angular2tutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
