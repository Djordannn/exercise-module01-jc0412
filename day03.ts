// 01. Write a code to display the multiplication table of a given integer
let example: number = 9; // input
let resultt: string = "";
for(let n: number = 1; n <= 10; n++) { // looping
    let output: string = ` ${example} x ${n} | \n`; // menggabungkan string dengan number
    resultt += output; // hasil output akan disimpan ke variable resultt
}
console.log(resultt);

// 02. Palindrom
let words: string = "malam"; // string
let wordPalindrom: boolean = true;
for(let i: number = 0; i < Math.floor(words.length / 2); i++) { // looping untuk membandingkan karakter
    console.log(words[i])
    if(words[i] !== words[words.length -1 - i]) {  // membandingkan karakter awal dan akhir    
        wordPalindrom = false;
        break;
    }
}
if(wordPalindrom) { // true jika palindrom, false jika bukan
    console.log("Palindrom");
} else {
    console.log("Bukan palindrom");
}

// 03. Convert CM to KM
let cm : number = 100000; // input
let km : number = cm / 100000; // 1km => 100000cm | input : 100000
console.log(`${km} km`);

// 04. Format number as currency(IDR)
let rp : number = 1000; // input
console.log(`Rp ${rp.toLocaleString('id-ID', {minimumFractionDigits : 0})}`); // merubah input menjadi mata uang IDR dan menambahkan digit

// 05. Remove the first occurence of a given "search string" from a string
let firstStr : string = "Hello world";
let searchStr : string = "ell";
console.log(firstStr.replace(searchStr, "")); // mengambil huruf 

// 06. Capitalize the first letter of each word
let word: string = "hello world"; // input
let bigWord: string = ""; // variabel kosong
for(let i : number = 0; i < word.length; i++) { // looping
    if(i === 0 || word[i - 1] === " ") { // 
        bigWord += word[i].toUpperCase(); // mengubah huruf menjadi kapital
    } else {
        bigWord += word[i].toLowerCase(); // menambahkan huruf 
    }
}
console.log(bigWord);

// 07. Swap the case of eash character from string
let alfaBig: string = "The QuiCK BrOwN Fox" // input string
let swapStr: string = ""; // string kosong untuk menyimpan data
for(let i: number = 0; i < alfaBig.length; i++) { // looping
    let charLetter: string = alfaBig[i]; // membuat variabel baru untuk menyimpan data alfaBig
    console.log(charLetter);
    if(charLetter === charLetter.toUpperCase()) { // jika terdapat huruf kapital maka huruf akan diubah menjadi normal
        swapStr += charLetter.toLowerCase();
    } else { // jika terdapat huruf normal maka akan diubah menjadi huruf kapital
        swapStr += charLetter.toUpperCase();
    }
}
console.log(swapStr)

// 08. Find the largest of two given integers
let num1: number = 42; // input
let num2: number = 27;
let num3: string = "";
if(num1 > num2) { // pengkondisian antara num1 dan num2
    num3 += num1;
    console.log(`Bilangan bulat terbesar adalah ${num1}`); // memunculkan console jika num1 lebih besar
} else {
    num3 += num1;
    console.log(`Bilangan bulat terbesar adalah ${num2}`);// memunculkan console jika num2 lebih besar
}
console.log(num3);


// 09. Sortir
let x: number = 3; // input
let y: number = 1; 
let z: number = 2; 
if(x > y) { // mengecek apakah x lebih besar dari y 
    let newVal: number = x; //nilai x disimpan didalam variabel "newVal"
    x = y; // mengubah nilai x menjadi nilai y
    y = newVal; //mengbah nilai y menjadi "newVal"
}
if(x > z) {
    let newVal: number = x;
    x = z;
    z = newVal;
}
if(y > z) {
    let newVal: number = y;
    y = z;
    z = newVal;
}
console.log(x, y, z)

// 10. Word shows
let input: string | number = "Hello"; // input
let hasilInput: number | string; // string kosong untuk menyimpan data
if(typeof input === "string" ) { // jika variable string memunculkan angka 1
    hasilInput = 1; 
} else if (typeof input === "number") { // jika variable number memunculkan angka 2
    hasilInput = 2;
} else { // jika bukan string atau number memunculkan angka 3
    hasilInput = 3
} 
console.log(hasilInput);

// 11. Change intp * from a string of input
let apple: string = "An apple a day keeps the doctor away" // input
let anApple: string = ""; // string kosong untuk menyimpan hasil
for(let i: number = 0; i < apple.length; i++) { // looping
    if(apple[i].toLowerCase() === "a") {
        anApple += "*"; // mengganti huruf a dengan "*";
    } else {
        anApple += apple[i]; // tambah karakter selain a
    }
}  
console.log(anApple);

console.log("Hello World!!");

let vlue = "Hello world"
let vlueKsong = "";
for(let i = 1; i <= vlue.length; i++) {
    vlueKsong += vlue[i];
}
console.log(vlueKsong);

let vluee = 10;
let outputt = "";
for(let i = 1; i <= vluee; i++) {;
    for(let j = 1; j <= i; j++) {
        outputt += j + ' ';     
    }
    console.log(`${outputt} \n`)
    outputt = ' ';
}

let angka = Math.max(42, 27, 100)
let angka1 = Math.min(42, 27, 100)
console.log(angka1);


// // 10. Word shows
// let input: number = ; // input
// let hasilInput: number; // string kosong untuk menyimpan data
// if(input === 1 ) { // jihaika variable string memunculkan angka 1
//     hasilInput += input;
//     console.log("String"); 
// } else if (input === 2) { // jika variable number memunculkan angka 2
//     hasilInput += input;
//     console.log("Number"); 
// } else { // jika bukan string atau number memunculkan angka 3
//     console.log("Null"); 
// } 
// console.log(hasilInput);

let upperCar = "LoWeRCaSe"
let resultCar = "";
for(let i = 0; i < upperCar.length; i++) {
    let leterCar = upperCar[i];
    if(leterCar === leterCar.toUpperCase()) {
        resultCar += leterCar.toLowerCase()
    } else if (leterCar === leterCar.toLowerCase()) {
        resultCar += leterCar.toUpperCase()
    }
}
console.log(resultCar);
