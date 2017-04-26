import { GiovannisegagniPage } from './app.po';

describe('giovannisegagni App', function() {
  let page: GiovannisegagniPage;

  beforeEach(() => {
    page = new GiovannisegagniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
