## Yazı Tura



<p align="center">
  <img src="yazi-tura.gif" alt="Yazi Tura App"/>
</p>

## Demo: https://patika-coin-flipper.netlify.app

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

App.js'de görüldüğü üzere CoinFlipper adlı bir component render ediyoruz. Bu component'in state'i içerisinde "side" ve "flipping" olarak 2 farklı bilgi tutuyoruz. Tutulan bu bilgiler Coin adında farklı bir component'e prop olarak geçiliyor ve Coin component'i içerisinde bu prop'a göre paranın hangi yüzü geleceğine karar verilip render ediliyor.
