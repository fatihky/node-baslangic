// ===============================================
// Üye kontrolcüsü
// ===============================================

app.post('/kayit', function(req, res){
	// [] kullanıcı adı ve şifre alanı(girilmiş mi?) kontrol edilecek
	// [] iki kere şifre girilmesi istenecek.
	//		bu şifrelerin doğruluğu kontrol edilecek
	// kullanıcı adının varlığı kontrol edilecek

    var ozetlenmis_sifre = passwordHash.generate(req.body.sifre)
	res.send("tamam")
})

app.post('/giris', function(req, res){
	// kullanıcı adı ve şifre alanları kontrol edilecek

	Uye.findOne({kullanici_adi: req.body.kullanici_adi})
	.exec(function(err, uye){
		if(err)
			return res.send(err)
		if(passwordHash.verify(req.body.sifre, uye.ozetlenmis_sifre))
		{
			req.session.uye = uye
			res.send('girş yapıldı')
		} else {
			res.send('kullanıcı adı veya şifre yanlış')
		}
	})
})
