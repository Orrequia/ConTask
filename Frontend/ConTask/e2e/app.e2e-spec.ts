import { AngularElectronSeedPage } from './app.po';

describe('ConTask App', () => {
  let page: AngularElectronSeedPage;

  beforeEach(() => {
    page = new AngularElectronSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
