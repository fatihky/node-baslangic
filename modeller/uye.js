// ===============================================
// Üye modeli
// ===============================================

GLOBAL.uyeSemasi = new Schema({
	isim:  String,
	soyisim: String,
	kullanici_adi: String,
	cinsiyet: Number, // 1: Erkek, 2: Kadın
	ozetlenmis_sifre: String
});

GLOBAL.Uye = mongoose.model('Uye', uyeSemasi);