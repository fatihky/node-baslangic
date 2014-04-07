// ===============================================
// Üye modeli
// ===============================================

GLOBAL.uyeSemasi = new Schema({
	isim:  String,
	soyisim: String,
	kullanici_adi: String,
	ozetlenmis_sifre: String
});

GLOBAL.Uye = mongoose.model('Uye', uyeSemasi);