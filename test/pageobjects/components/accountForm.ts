export class MyAccountForm {

    private get container() :  WebdriverIO.Element {
        return $('#account-creation_form')
    }

     get btnSubmit () : Item  { 
        return new Item(this.container.$('button[type="submit"]').click())
    }


    get emailField() { return $('#email_create')}
    get genderOptionFemale() { return $('#id_gender2')}
    get customerFirstName() { return $('#customer_firstname') }
    get customerLastName() { return  $('#customer_lastname') }
    get firstName() { return $('#firstname') }
    get lastName() { return $('#lastname') }
    get addressInfo() { return $('#address1')}
    get cityInput() { return  $('#city')}
    get selectStateInfo() { return $('select[id="id_state"]')}
    get postcodeInput() { return $('#postcode')}
    get phoneNumberInput() { return $('#phone_mobile')}
    get aliasInput() { return $('#alias') }
    get submitButton() { return $('#submitAccount')}
    get password () { return  $('#passwd') }

    fillAccountForm(firstname : string, lastname : string, address : string, city : string, state :string, postcode :string,
         phone : string, alias :string) {
        this.firstName.setValue(firstname);
        this.lastName.setValue(lastname);
        this.addressInfo.setValue(address);
        this.cityInput.setValue(city);
        this.selectStateInfo.selectByVisibleText(state);
        this.postcodeInput.setValue(postcode);
        this.phoneNumberInput.setValue(phone);
        this.aliasInput.setValue(alias);
    }

    submitForm(){
        this.submitButton.click();
    }

    fillCustomerInformation(firstname: string, lastname: string, password: string) {
        this.genderOptionFemale.click();
        this.customerFirstName.setValue(firstname);
        this.customerLastName.setValue(lastname);
        this.password.setValue(password);
    }
}

class Item {
    container
    
    constructor(itemContainer) {
        this.container = itemContainer
    }

    public getSubmitBtn() {
        return this.container.$('button[type="submit"]')
    }

    public getProductPrice() :  number {
        return parseFloat(this.container.getAttribute('data-price'))

    }

}

export const myAccountForm = new MyAccountForm();
