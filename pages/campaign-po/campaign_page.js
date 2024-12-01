const fs = require('fs'); // Import fs module
const Actions = require('common-actions')

class Campaign_Page {
  // Define selectors for static elements
  get selectCampaign_dropdown(){
    return $("#campaignType");
   }

   get campaignTypeNext_button(){
    return $("#createCampaign");
   }

   
   get arrow_dropdown(){
    return $("(//span[@class='select2-selection__arrow'])[2]");
   }

   get enterAudioName_dropdown(){
    return $("(//input[@class='select2-search__field'])[2]");
   }

   get soundsNext_button(){
    return $("#wizard-next");
   }

   get contactsNext_button(){
    return $("#wizard-next");
   }

   get settingsNext_button(){
    return $("#wizard-next");
   }

   get secheduleFinish_button(){
    return $("#wizard-next");
   }

   get contactList_textfield(){
    return $("(//input[@class='select2-search__field'])");
   }
  
  async createCampaign() {


    // Locate the dropdown element 
    const dropdown = await this.selectCampaign_dropdown;
    await dropdown.selectByVisibleText('Voice Broadcasting');
    
    //Click on Campaign Type Next Button 
    await Actions.click_element(this.campaignTypeNext_button);

    //wait for  Arrow drop down 
    const elemArrowDropdown = await this.arrow_dropdown;
    await elemArrowDropdown.waitForDisplayed({ timeout: 70000 });

    //Click on arrow drop down
    await Actions.click_element(this.arrow_dropdown);

    //Enter audio name to select
    await Actions.type_value(this.enterAudioName_dropdown,"sample-audio-voice-broadcast")

    //Press Enter to select audio
    await browser.keys('Enter');

    //Clicking on Sounds tab next button  
    await Actions.click_element(this.soundsNext_button);

    //Click on Contact List field to enter
    await Actions.click_element(this.contactList_textfield)
    await browser.keys('Enter');

    //Click on Contacts tab Next Button
    await Actions.click_element(this.contactsNext_button);

  //Click on Settings tab next button.
    await Actions.click_element(this.settingsNext_button);

    //Click on Schedule Finish button
    await Actions.click_element(this.secheduleFinish_button);
      
  }

 
}

module.exports = new Campaign_Page();
