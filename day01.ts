//01. LUAS PERSEGI PANJANG
//INPUT
//Menentukan nilai input untuk mencari luas persegi panjang
let p: number = 5;
let l: number = 3;

//PROSES
//Menghitung nilai luas persegi panjang
let luas: number;
luas = p * l;

//OUTPUT
//Hasil luas persegi panjang
console.log(luas);



//02. KELILING PERSEGI PANJANG
//INPUT 
//Menentukan nilai input untuk mencari keliling persegi panjang
let pk: number = 5;
let lk: number = 3;

//PROSES
//Menghitung keliling persegi panjang
let keliling: number;
keliling = 2 * (pk + lk); 

//OUTPUT
//Hasil keliling persegi panjang
console.log(keliling)



//03. DIAMERTER LINGKARAN
// INPUT
//Menentukan nilai dari jari-jari lingkaran
let r: number = 5;

//PROSES 
//Menghitung diameter lingkaran
let diameter: number;
diameter = 2 * r;

//OUTPUT
//Hasil nilai diameter lingkaran
console.log(diameter);


//KELILING LINGKARAN
// INPUT
//Memasukkan nilai pi dan diameter lingkaran
const pI: number = Math.PI;

//PROSES 
//Menghitung keliling lingkaran
let kl: number;
kl = pI * 2 * r;

//OUTPUT
//Hasil keliling lingkaran
console.log(kl);


//LUAS LINGKARAN
let ll: number;
ll = pI * Math.pow(r, 2);

console.log(ll);



//04. SUDUT SEGITIGA
//INPUT
//Menentukan nilai sudut segitiga
let a: number = 80;
let b: number = 65;
let sudut: number = 180;

//PROSES
//Menghitung nilai sudut segitiga
let result: number;
result = sudut - a - b;

//OUTPUT
//Hasil nilai sudut segitiga
console.log(result);



//05. KONVERSI HARI KE TAHUN, BULAN, HARI
let year1: number = 400;
let year2: number = 366;

//TAHUN
//Mengkonversi hari ke tahun
let hy1: number = Math.floor(year1 / 365);
console.log(hy1);
//Mengkonversi hari ke tahun
let hy2: number = Math.floor(year2 / 365);
console.log(hy2);

//BULAN
let month1: number = 30;
let month2: number = 0;
//Mengkonversi hari ke bulan
let hm1: number = Math.floor(month1 % 365 / 30);
console.log(hm1);
//Mengkonversi hari ke bulan
let hm2: number = Math.floor(month2 % 365 % 30);
console.log(hm2);

//HARI
let day1: number = 5;
let day2: number = 1;
//Menghitung sisa hari
let hd1: number = Math.floor(day1 % 365);
console.log(hd1);
//Menghitung sisa hari
let hd2: number = Math.floor(day2 % 365);
console.log(hd2);

console.log(`${year1} hari -> ${hy1} Tahun, ${month1} Bulan, ${day1} Hari`);
console.log(`${year2} hari -> ${hy2} Tahun, ${month2} Bulan, ${day2} Hari`);



//06. SELISIH TANGGAL DALAM HARI
let date1: Date = new Date("2022-01-20");
let date2: Date = new Date("2022-01-22");

let dateFinal1: number = date1.getTime();
let dateFinal2: number = date2.getTime();

let dateHasil: number = dateFinal2 - dateFinal1;
const hasilHari: number = dateHasil / 1000 / 60 / 60 / 24;

console.log(hasilHari); 





