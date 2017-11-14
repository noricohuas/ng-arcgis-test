import { HomePage } from './home.po';

describe('ng-seed Home', () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display a button', () => {
        page.navigateTo();
        const text = page.getMapViewButtonText();
        expect(text).toEqual('Map View');
    });

    it('should change button text on click', () => {
        page.navigateTo();
        page.clickHelloButton();
        const text = page.getMapViewButtonText();
        expect(text).toEqual('You have clicked 1 times!');
    });

});
