const Page = require('./page');
class RegistrationPage extends Page {

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    register (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('index.php?controller=authentication&back=my-account');
    }
}

module.exports = new RegistrationPage();
