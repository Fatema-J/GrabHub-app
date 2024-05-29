var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  const dateTimeObject = new Date();
  Hour = dateTimeObject.getHours()
  Min = dateTimeObject.getMinutes()

  let meal;
  if (Hour>=5 && Hour<11){
   meal = 'Breakfast'
  } else if(Hour>=11 && Hour<18){
    meal = 'Launch'
  } else{
    meal = 'Dinner'
  }

  const phrase = `Hello! it's ${Hour}:${Min}, You May Pick Your ${meal}`
  res.render('index', { title: 'Restaurants App',  phrase});
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/restaurants',
    failureRedirect: '/index'
  }
));
// OAuth logout route
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});


module.exports = router;
