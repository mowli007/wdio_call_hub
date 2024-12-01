'use strict';
const assert = require("assert");
const axios = require('axios');  
const LoginDemo = require('login-po');
const Home_Page= require('home-po');
const Campaign_Page= require('campaign-po');
const Actions = require('common-actions');


describe("Login Test", () => {
  it("Verify Title", async () => {
    await browser.url(
      "/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    console.log(title)
    await assert.strictEqual(
      title,
      "Digital Organizing, Campaigning & Canvassing Platform | CallHub"
    );
  });

   it("Verify login with valid credentails, Create Voice broadcast campaign,logout", async () => {
 
    //Login to Call Hub with password
    await LoginDemo.login("chandramowli007@gmail.com","Smaran_09");
   
    //Create voice broadcast video and finish
    await Home_Page.home();
    await Campaign_Page.createCampaign();

    //Logout
    await Home_Page.Logout();

  });

});
