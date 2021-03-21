import * as chai from 'chai'
import { registrationPage } from '../pageobjects/registrate.page';
import { myAccountInfoPage } from '../pageobjects/myAccountInfo.page';

describe('@SMOKE User', () => {
    it('can register', () => {
      const expect = chai.expect;
      const assert = chai.assert;

      registrationPage.open();  
      browser.pause(5000);
      var id =  new Date().getTime()/1000;
      registrationPage.startRegisterAndWaitForForm(`blest${id}@test.com`);
      registrationPage.fillCustomerInformation("test","testLastName", "Testing123@");
      registrationPage.fillAccountForm( "testName", "lastname", "address1", "city","California", "04060","0632900042", "alias");
      registrationPage.submitForm();
  
      expect(myAccountInfoPage.isAccountPageDisplayed())
          .to.equal(true,'Expected my account page is opened aftre success registration');
      assert.isTrue(myAccountInfoPage.getTextAccountPageText()
         .includes('Welcome to your account'), `Account text not equal to ${myAccountInfoPage.getTextAccountPageText()}`);

    })
});