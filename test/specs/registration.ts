import * as assert  from "assert";

describe('User', () => {
    it('can register', () => {
      browser.url(`/index.php?controller=authentication&back=my-account`);  
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
      stateSelect.selectByVisibleText("Kansas");
      $('#postcode').setValue("04060");
      $('#phone_mobile').setValue("0632900042");
      $('input[id="alias"]').setValue("alias");
      $('button[id="submitAccount"]').click();
      const myAccount = $('p.info-account');
      assert(myAccount.isDisplayed, 'Expected my account page is opened aftre success registration');
      const myAccountText = myAccount.getText();
      assert(myAccount.getText().includes('Welcome to your account'), `Account text not equal to ${myAccountText}`);





    })
});