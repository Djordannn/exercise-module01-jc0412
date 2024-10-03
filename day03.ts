// 01. Write a code to display the multiplication table of a given integer
let example: number = 9;
let resultt: string = "";
for(let n: number = 1; n <= 10; n++) {
    let output: string = ` ${9} x ${n} | \n`;
    resultt += output;
}
console.log(resultt);

// 02. Palindrom
let words: string = "malam";
let wordPalindrom: boolean = true;
for(let i: number = 0; i < Math.floor(words.length / 2); i++) {
    console.log(words[i])
    if(words[i] !== words[words.length -1 - i]) {        
        wordPalindrom = false;
        break;
    }
}
if(wordPalindrom) {
    console.log("Palindrom");
} else {
    console.log("Bukan palindrom");
    
}

// 03. Convert CM to KM
let cm : number = 100000;
let km : number = cm / 100000;
console.log(`${km} km`);

// 04. Format number as currency(IDR)
let rp : number = 1000;
console.log(`Rp ${rp.toLocaleString('id-ID', {minimumFractionDigits : 2})}`); 

// 05. Remove the first occurence of a given "search string" from a string
let firstStr : string = "Hello world";
let searchStr : string = "ell";
console.log(firstStr.replace(searchStr, ""));

// 06. Capitalize the first letter of each word
let word = "hello world";
let bigWord = "";
for(let i : number = 0; i < word.length; i++) {
    console.log(i);
    if(i === 0 || word[i - 1] === " ") {
        bigWord += word[i].toUpperCase();
    } else {
        bigWord += word[i];
    }
}
console.log(bigWord);

// 07. Swap the case of eash character from string
let alfaBig: string = "The QuiCK BrOwN Fox" 
let swapStr: string = "";
for(let i: number = 0; i < alfaBig.length; i++) {
    let charNow = alfaBig[i];
    if(charNow === charNow.toUpperCase()) {
        swapStr += charNow.toLowerCase();
    } else {
        swapStr += charNow.toUpperCase();
    }
}
console.log(swapStr)

// 08. Find the largest of two given integers
let num1 = 42;
let num2 = 27;
if(num1 > num2) {
    console.log(`Bilangan bulat terbesar adalah ${num1}`);
} else {
    console.log(`Bilangan bulat terbesar adalah ${num2}`);
}

// 09. Sortir
let x: number = 3; 
let y: number = 1; 
let z: number = 2; 
if(x > y) {
    let newVal: number = x;
    x = y;
    y = newVal;
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