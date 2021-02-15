const Page = require('./page');
class RegistrationPage extends Page {

    get inputNewEmail () { return $('#email_create') }
    get inputCustomerName () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    register (email,username, password) {
        this.inputNewEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('index.php?controller=authentication&back=my-account');
    }
}

module.exports = new RegistrationPage();
