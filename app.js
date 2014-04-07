GLOBAL.express 		= require('express')
GLOBAL.mongoose 	= require('mongoose');
GLOBAL.app 			= express();
GLOBAL.Schema 		= mongoose.Schema;
GLOBAL.passwordHash = require('password-hash');

require('mongoose-query-paginate');

var session = require('express-session')
      , RedisStore = require('connect-redis')(session);

app.use( express.cookieParser() );
app.use(session({ store: new RedisStore(), secret: 'keyboard cat' }));

require('./modeller/uye');
require('./kontrolcüler/uye');

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/ayarla/:anahtar/:deger', function(req, res){
	req.session[req.params.anahtar] = req.params.deger;
	res.send('hello world');
});

app.get('/goster/:anahtar', function(req, res){
	res.send(req.params.anahtar + ': ' + req.session[req.params.anahtar]);
});

app.listen(3000);

console.log("express server listening on 127.0.0.1:3000");