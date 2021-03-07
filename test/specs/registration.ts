import * as chai from 'chai'
import {RegistrationPage} from '../pageobjects/registrate.page';
describe('@SMOKE User', () => {
    it('can register', () => {
      const expect = chai.expect;
      const assert = chai.assert;
      const RegistrationPage  = require('../pageobjects/registrate.page'); 
      RegistrationPage.open();  
      browser.pause(5000);
      var id =  new Date().getTime()/1000;
      RegistrationPage.startRegisterAndWaitForForm(`blablatest${id}@test.com`)
      RegistrationPage.fillAccountFormAndSubmit("test","testLastName", "Testing123@", "testName", "lastname", "address1",
       "city","California", "04060","0632900042", "alias");
  
      const myAccount = $('p.info-account');
      expect(myAccount.isDisplayed()).to.equal(true,'Expected my account page is opened aftre success registration' )
      const myAccountText = myAccount.getText();
      assert.isTrue(myAccount.getText().includes('Welcome to your account'), `Account text not equal to ${myAccountText}`);

    })
});