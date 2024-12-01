const fs = require('fs'); // Import fs module
const Actions = require('common-actions')

class Home_Page {
  // Define selectors for static elements
  get homeTitle_label() { 
      return $("//div[@class='span12 tablet-padding-left']"); 
  }


   get createCampaign_button(){
    return $("//a[@class='newCreateCampaignButton']");
   }

  
   ////////// 
  
   get name_link(){
    return $("//span[@class='nav-name']");
   }
   
  get signout_link(){
    return $("(//a[@class='menu-dropdown-link'])[8]")
  }

  async home() {
     
          const elemHomeTitleName = await this.homeTitle_label;
          await elemHomeTitleName.waitForDisplayed({ timeout: 70000 });

          const homePageText = await elemHomeTitleName.getText();
          console.log(homePageText);  // Log to console

          //Click on Create campaign button
          await Actions.click_element(this.createCampaign_button);

          

        //Getting text and validating text
          const successMessage_text= await (this.successMessage_label);
          console.log(await successMessage_text);

      }
      
  async Logout(){

    //Click on Name Link to sign out
    await Actions.click_element(this.name_link);
    //Click on Sign Out
    await Actions.click_element(this.signout_link);

  }
      

  }

 


module.exports = new Home_Page();
