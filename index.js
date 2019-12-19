'use strict';

const express = require('express');
const httpRequest = require('request');
const app = express();

app.use(express.static(__dirname + '/frontend/build'));

app.get('/code', (request, response) => {
  const code = request.query.code;
  const instagramAuthUrl = 'https://api.instagram.com/oauth/access_token';

  if(request.query.error) {
     response.redirect('/error');
  }
  const data = {
   'client_id' : '2fbc4c88fae2461896a9ba191044532a',
   'client_secret' : '85f411707b3a402f9809004f6f682734',
   'grant_type' : 'authorization_code',
   'redirect_uri' : 'http://165.227.58.221/code',
   'code' : code
  };
  
  httpRequest.post({
    url: instagramAuthUrl,
    form: data
  }, function (e, r, body) {
    console.log('------');
    console.log(e);
    console.log('------');
    console.log(body);
    response.cookie('auth', body);
    response.redirect('/success');
  });
  
});


app.get('*', function(request, response) {
    response.sendFile(__dirname + '/frontend/build/index.html');
});

app.listen(80, function() {
});