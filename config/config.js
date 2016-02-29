module.exports ={
  "use_database"          :     "false",
  "host"                  :     "localhost",
  "username"              :     "root",
  "password"              :     "",
  "database"              :     "DB NAME",
  facebookAuth: {
   clientID: 'YOUR-FB-CLIENT-ID',
   clientSecret: 'YOUR-FB-CLIENT-SECRET',
   callbackURL: 'http://localhost:3000/auth/facebook/callback',
 },
  twitterAuth: {
   consumerKey: 'YOUR-TWITTER-CONSUMER-KEY',
   consumerSecret: 'YOUR-TWITTER-CONSUMER-SECRET',
   callbackURL: 'http://localhost:3000/auth/twitter/callback',
 },
 googleAuth: {
   clientID: 'YOUR-GOOGLE-CLIENT-ID',
   clientSecret: 'YOUR-GOOGLE-CLIENT-SECRET',
   callbackURL: 'http://localhost:3000/auth/google/callback',
 },
};
