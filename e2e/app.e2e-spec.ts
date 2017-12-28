import { LoginNgPage } from './app.po';

describe('login-ng App', () => {
  let page: LoginNgPage;

  beforeEach(() => {
    page = new LoginNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
