'use strict';
const Actions = require('common-actions')
class LoginDemo {
    /**
     * define selectors using getter methods
     */
    get login_Link() {return $("(//a[text()='Log In'])[1]");}
    get username_inputbox() { return $("#id_user");}
    get next_button(){return $("#change-btn-text");}
    get password_inputbox() { return $("#id_password");}
    get signin_button() { return $("#change-btn-text");}
   // get btnSubmit() { return $("a[aria-label='Search']");}

  async login(username, password) {
    await Actions.click_element(this.login_Link);
    const elemUserNameTextBox = await this.username_inputbox;
    await elemUserNameTextBox.waitForDisplayed({ timeout: 70000 });
    await Actions.type_value(this.username_inputbox, username);
    await Actions.click_element(this.next_button);
    await Actions.type_value(this.password_inputbox, password);
    await Actions.click_element(this.signin_button);
  }

  }
  module.exports = new LoginDemo();
  