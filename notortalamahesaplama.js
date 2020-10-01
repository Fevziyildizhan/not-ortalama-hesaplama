var sayi1 = Number(prompt('ilk notunuzu girin'))
var sayi2 = Number(prompt('ikinci notunuzu girin'))
var sayi3 = Number(prompt('üçüncü notunuzu girin'))
var toplam;
toplam = (Number(sayi1)+Number(sayi2)+Number(sayi3))/3

if(100 >= toplam && toplam >=70){
     console.log('geçtiniz ortalamanız : ' +toplam)
}else if(60 >= toplam && 10 >=toplam){
    console.log('kaldınız ortalamanız ' +toplam)
}else{
    console.log('Bu sene sınıfta kaldınız ortalamanız : ' +toplam)
}
