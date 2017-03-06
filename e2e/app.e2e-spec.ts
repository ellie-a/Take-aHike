import { TakeAHikePage } from './app.po';

describe('take-a-hike App', () => {
  let page: TakeAHikePage;

  beforeEach(() => {
    page = new TakeAHikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
