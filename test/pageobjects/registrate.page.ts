
import { Page } from '../pageobjects/page';
import { MyAccountForm } from '../pageobjects/components/accountForm';

export class RegistrationPage extends Page {
    myAccountForm : MyAccountForm = new MyAccountForm();

    get accountForm(){ return $('#account-creation_form')}
    get inputNewEmail () { return $('#email_create') }
    get btnSubmitCreate() { return $('#SubmitCreate')}

    startRegisterAndWaitForForm (email) {
        this.inputNewEmail.setValue(email);
        this.btnSubmitCreate.click(); 
        browser.pause(5000);
        this.accountForm.waitForDisplayed();
    }

    fillCustomerInformation(firstname: string, lastname: string, password: string) {
        this.myAccountForm.fillCustomerInformation(firstname, lastname, password);
    }

    fillAccountForm(firstname : string, lastname : string, address : string, city : string, state :string, postcode :string,
        phone : string, alias :string) {
        this.myAccountForm.fillAccountForm(firstname, lastname, address, city, state, postcode, phone, alias);
    }

    submitForm() {
        this.myAccountForm.submitForm();
    }


    open () {
        return super.open('index.php?controller=authentication&back=my-account');
    }
    
}

 export const registrationPage = new RegistrationPage();
