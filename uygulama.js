// ===============================================
// Node.js Başlangıç Uygulaması
// ===============================================
// git add *
// git commit -m "deneme"
// git push -u origin master

// Bu kısmı genel-ayarlamalar.js dosyasına atacağım //
GLOBAL.express 		= require('express')
GLOBAL.mongoose 	= require('mongoose');
GLOBAL.app 			= express();
GLOBAL.Schema 		= mongoose.Schema;
GLOBAL.passwordHash = require('password-hash');

require('mongoose-query-paginate');

var session = require('express-session')
  , RedisStore = require('connect-redis')(session)
  , ifile = require('ifile')
  , iroute = require("iroute");

// deneme adresleri dışındaki bütün adresler burada olaracak //
// kontrolcüler yol_fonksiyonlari.push() ile uygulamaya dail olacak 
GLOBAL.yol_fonksiyonlari = [
	["get:/hello/world", function(req,res){
		res.end('hello world')
	}]
];

app.use(iroute.connect(route_array));

app.use( ifile.connect( [["/dosyalar", __dirname]] ) ); 
app.use( express.json() );
app.use( express.urlencoded() );
app.use( express.cookieParser() );
app.use( session({ store: new RedisStore(), secret: 'keyboard cat' }) );

require('./modeller/uye');
require('./kontrolcüler/uye');

// Bu kısım zaten deneme kısmı. Bu dosyada kalacak //
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

var sunucu = app.listen(3000);

process.on('SIGINT', function() {
	console.log();
	console.log('uygulama sonlandırılıyor...');
	sunucu.close();
	process.exit();
});

console.log("express server listening on 127.0.0.1:3000");