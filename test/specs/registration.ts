import * as chai from 'chai'
describe('@SMOKE User', () => {
    it('can register', () => {
      const expect = chai.expect;
      const assert = chai.assert;
      const RegistrationPage  = require('../pageobjects/registrate.page'); 
      RegistrationPage.open();  
      browser.pause(5000);
      var id =  new Date().getTime()/1000;
      $('#email_create').setValue(`blablatest${id}@test.com`);
      $('button[name="SubmitCreate"]').click();
      $('#account-creation_form').waitForDisplayed();

      $('#id_gender2').click();
      $('#customer_firstname').setValue("test");
      $('#customer_lastname').setValue("testLastName");
      $('#passwd').setValue("Testing123@");

      $('#firstname').setValue("testName");
      $('#lastname').setValue("lastname");
      $('#address1').setValue("address1");
      $('#city').setValue("city");
      const stateSelect = $('select[id="id_state"]')
      stateSelect.selectByVisibleText("California");
      $('#postcode').setValue("04060");
      $('#phone_mobile').setValue("0632900042");
      $('#alias').setValue("alias");
      $('#submitAccount').click();
      const myAccount = $('p.info-account');
      expect(myAccount.isDisplayed()).to.equal(true,'Expected my account page is opened aftre success registration' )
      const myAccountText = myAccount.getText();
      assert.isTrue(myAccount.getText().includes('Welcome to your account'), `Account text not equal to ${myAccountText}`);

    })
});