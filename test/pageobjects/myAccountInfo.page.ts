import { Page } from '../pageobjects/page';

export class MyAccountInfoPage extends Page {

    get myAccountInfo() {return $('p.info-account')}

    isAccountPageDisplayed() : boolean {
        return this.myAccountInfo.isDisplayed();
     }
 
     getTextAccountPageText() : string {
         return this.myAccountInfo.getText();
    }
}

export const myAccountInfoPage = new MyAccountInfoPage();