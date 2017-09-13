import { WeatherSimplyPage } from './app.po';

describe('weather-simply App', () => {
  let page: WeatherSimplyPage;

  beforeEach(() => {
    page = new WeatherSimplyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
