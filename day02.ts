//01. Mentukan bilangan genap dan ganjil
let value: number = 4;

if(value % 2 === 0) {
    console.log(`Angka ${value} adalah genap`);
} else {
    console.log(`Angka ${value} adalah ganjil`);
}

//02. Menentukan bilangan prima
let prima: number = 5;

if(prima / 2 === 1 || prima % 2 === 1) {
    console.log("Bilangan prima")
} else {
    console.log("Bukan bilangan prima")
}

// 03. Mencari jumlah angka 1 hingga n
let count: number = 0;
for(let i: number = 0; i <= 3; i++) {
    count += i;
    console.log(count);
} 

//04. Mencari faktorial
let faktor = 4;
let fakCount = faktor;
for(let i = faktor - 1; i > 0; i--) {
    fakCount = fakCount * i;
    console.log(fakCount);
}

//05. Fibonaci djordan
// let fibonaci = 15;
// for(let i = 0; i < 15; i++) {
//     console.log(i + );
// }

let fiboNum = 15;
let firstPrev = 0;
let secondPrev = 1;
for (let i = 2; i <= fiboNum; i++) {
    let nextNumber = firstPrev + secondPrev
    firstPrev = secondPrev;
    secondPrev = nextNumber;
    console.log(nextNumber)
}

// const n5 = 15;
// let fib = 0
// let fib1 = 0
// let fib2 = 1

// for(let i = 1; 1 <= n5; i++) {
//     console.log(i);
// }