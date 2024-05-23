const express = require('express');
const router = express.router();

router.get('/', function(req, res, next) {
  res.redirect('/');
});

