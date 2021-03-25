import * as chai from 'chai'
import { App } from '../pageobjects/application';

describe('@SMOKE User', () => {
    it('can register', () => {
      const expect = chai.expect;
      const assert = chai.assert;

      App.registrationPage.open();  
      browser.pause(5000);
      var id =  new Date().getTime()/1000;
      App.registrationPage.startRegisterAndWaitForForm(`blest${id}@test.com`);
      App.registrationPage.fillCustomerInformation("test","testLastName", "Testing123@");
      App.registrationPage.fillAccountForm( "testName", "lastname", "address1", "city","California", "04060","0632900042", "alias");
      App.registrationPage.submitForm();
  
      expect(App.myAccountInfoPage.isAccountPageDisplayed())
          .to.equal(true,'Expected my account page is opened aftre success registration');
      assert.isTrue(App.myAccountInfoPage.getTextAccountPageText()
         .includes('Welcome to your account'), `Account text not equal to ${App.myAccountInfoPage.getTextAccountPageText()}`);

    })
});