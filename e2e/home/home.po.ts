import { browser, by, element } from 'protractor';

export class HomePage {

    public navigateTo() {
        return browser.get('/index.html#/home');
    }

    public getMapViewButtonText() {
        return element(by.css('container btn esri-icon-maps')).getText();
    }

    public clickHelloButton() {
        element(by.css('home button.btn')).click();
    }

}
