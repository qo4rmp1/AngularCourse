import { Ng4Course170805Page } from './app.po';

describe('ng4-course170805 App', () => {
  let page: Ng4Course170805Page;

  beforeEach(() => {
    page = new Ng4Course170805Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
