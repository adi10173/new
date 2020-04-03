// Menangkap pilihan player
var lagi = true;

while (lagi == true) {

var player = prompt ('Silahakan Pilih : gajah, semut, orang');

// Menangkap pilihan komputer
// Me - (Random) kan pilihan komputer
var com = Math.random();

if ( com < 0.33 ){
	com = 'gajah';
} else if ( com >= 0.33 && com < 0.66 ){
	com = 'orang';
} else {
	com	= 'semut';
}

var hasil = '';
// Menentukan Rules ( apa lawan apa menang apa)
if (player == com){
	hasil = 'SERI';
} else if (player == 'gajah') {
	// if (com	== 'orang') {
	// 	hasil = 'MENANG';
	// } else {
	// 	hasil = 'KAlAH';
	// }
	hasil = (com == 'orang') ? 'MENANG' : 'KALAH';

} else if (player == 'orang') {
	hasil = (com == 'gajah') ? 'KALAH' : 'MENANG';

} else if (player == 'semut') {
	hasil = (com == 'gajah') ? 'MENANG' : 'KALAH';
} else {
	hasil = 'ANDA MEMASUKAN YANG TIDAK ADA DALAM PILIHAN';
}



// Menampilkan Hasil 
alert ('Kamu memiih : ' + player + ' ,dan Komputer memilih : ' + com );
alert (' Maka Hasilnya : ' + hasil);

lagi = confirm ('LAGI ???');
} 

alert ('TERIMAKASIH TELAH BERMAIN GAME BERSAMA KAMI !!!');