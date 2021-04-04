
import { RegistrationPage } from '../pageobjects/registrate.page';
import { MyAccountInfoPage } from './myAccountInfo.page';

export class Application {
    myAccountInfoPage =  new MyAccountInfoPage();
    registrationPage =  new RegistrationPage();
}

export const App: Application = new Application();