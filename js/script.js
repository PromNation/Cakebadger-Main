Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
  if (error) {
    // error encountered while loading
    console.log(error);
  }
  // the sdk is now loaded
  if (status.authenticated) {
    // user is currently logged in
  }
});

