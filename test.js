// Require all the packages
require('dotenv').config();
const client = require('twitter-api-client');
const axios = require('axios');
const fs = require('fs');
const jimp = require('jimp');

// Your Twitter account
const TWITTER_HANDLE = 'Deveshb15'
const twitterClient = new client.TwitterClient({
  apiKey: process.env.API_KEY,                      //YOUR CONSUMER API KEY
  apiSecret: process.env.API_SECRET,                //YOUR CONSUMER API SECRET 
  accessToken: process.env.ACCESS_TOKEN,            //YOUR ACCESS TOKEN
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET    //YOUR ACCESS TOKEN SECRET
});

// Test the twitter-api-client
async function test() {
  const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'rishabk7', count: 1 });

  console.log(data[0].followers_count)

  //const data = await twitterClient.accountsAndUsers.followersList({ screen_name: 'rishabk7', count: 1 });

  //console.log(data)
}

test();