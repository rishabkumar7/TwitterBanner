# Real time Twitter Banner

Inspired by - [Devesh](https://github.com/Deveshb15/real-twitter-banner)

## How to setup for your Twitter

Just fill in your API keys which you'll need to apply for a [Twitter developer account](https://developer.twitter.com/en/apply-for-access). It usually get's approved within 5 minutes.

```
const TWITTER_HANDLE = 'Deveshb15'
const twitterClient = new client.TwitterClient({
  apiKey: "YOUR CONSUMER API KEY"
  apiSecret: "YOUR CONSUMER API SECRET" 
  accessToken: "YOUR ACCESS TOKEN"
  accessTokenSecret: "YOUR ACCESS TOKEN SECRET"
});

```

Lastly, change the default banner `1500x500.png`. Make sure it's a `png` (as in the mimetype, not just the file extension).
![g](https://github.com/rishabkumar7/TwitterBanner/blob/master/1500x500.png?raw=true)
## Run the script

Install dependencies:
```
npm install
```

Start the app:

```
node index.js
```
or
```
npm start
```


## How the script works

Summary:

1. Fetch your recent 3 followers using Twitter API. (Rate limit: 180 requests per 15 mins)
2. Download the profile image of the recent 3 followers.
3. Use Jimp to add it on banner
4. Update your profile banner using Twitter API. (Rate limit: 30 requests per 15 mins)

The delay between follow and banner update is between 6s to 15s.

**Feel free to contribute to this project, would love to have you as a contributor. Just fork the project, create an issue, and then create a pull request!**

