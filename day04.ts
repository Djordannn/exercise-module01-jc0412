// 01. 
function triangleNum(e) {
    for(let i: number = 1; i <= e; i++) {
        let space = '';
        for(let j: number = 1; j <= i; j++) {
            space += j;
        }
        console.log(space);
    }
}
triangleNum(5)

// 02.
// INPUT
// Membuat function maxValue untuk mencari nilai terbesar dari nilai yang diinputkan
function maxValue([a, b, c, d]) {
// Looping nilai maxValue
    for(let i: number = 0; i < 4; i++) {
// Menghitung nilai terbesar menggunakan fungsi Math.max()
        let value = Math.max(a, b, c, d);
// Mengembalikkan nilai value
        return value;
    }
}
// Print function maxValue
console.log(maxValue([10, 55, 79, 32]));

let arrInput = [10, 55, 79, 32];

function nilaiTerbesar([a, b, c, d]) {
    for(let i = 0; i < arrInput.length; i++) {
        console.log(i);
        
        let outputNilai = arrInput[i];
        console.log(outputNilai);
        
    }
}



// Exercise 01
function triangleNum2(height) {
    let heightNum: number = 1;
    for(let i: number = 1; i <= height; i++) {
        let space = '';
        for(let j: number = 1; j <= i; j++) {
            space += (heightNum < 10 ? '0' : '') + heightNum + '';
            heightNum++;
        }
        console.log(space.trim());
    }
}
triangleNum2(4)

// Exercise 02
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {        
        let number: string = '';
        let fizz: string = 'Fizz';
        let buzz: string = 'Buzz';
        let coup: string = 'FizzBuzz';
        if(i % 3 === 0 && i % 5 === 0) {
            number += coup;
        } else if(i % 3 === 0) {
            console.log('FizzBuzz');
            number += fizz;
        } else if(i % 5 === 0) {
            number = buzz;
        } else {
            number += i;
        }
        console.log(number);
    }
}
fizzBuzz(15);

// Exercise 03
function identifierBmi(weight, height) {
    let tinggi: number = height / 100;
    let bmi: number = weight / (tinggi * tinggi);
    console.log(Math.floor(bmi));
    
    if(bmi < 18.5) {
        return "Less Weight"
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        return "Ideal";
    } else if(bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else if(bmi >= 30 && bmi <= 39.9) {
        return "Very Overweight";
    } else if(bmi >= 39.9){
        return "Obesity";
    }
}
console.log(identifierBmi(55, 170));

// Exercise 04
function angkaGenap(e) {
    let output: number[] = [];

    for(let i = 0; i < e.length; i++) {
        if(e[i] % 2 === 0) {
            output.push(e[i]);
        }
    }
    
    return output;
}
let number: number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(angkaGenap(number));

// Exercise 01
function splitHuruf(a) {
    let mySplit = a.split(" ");
    return mySplit;
}
console.log(splitHuruf("Hello World"));