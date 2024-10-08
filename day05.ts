// 01.
function nilaiSort(arr) {
    arr.sort((a, b) => a - b); // Mengurutkan array
    const terendah = arr[0]; // Nilai terendah
    const tertinggi = arr[arr.length - 1]; // Nilai tertinggi
    const rataRata = arr.reduce((acc, curr) => acc + curr, 0) / arr.length; // Menghitung rata-rata
    return {
        terendah: terendah,
        tertinggi: tertinggi,
        rataRata: rataRata
    };
}
const arrSort = [12, 5, 23, 18, 4, 45, 32];
console.log(nilaiSort(arrSort));

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];
function getDataAvg(aray) {
    let terkecil = aray[0]; // Menentukan variable terendah dengan elemen pertama array
    let terbesar = aray[0]; // Menentukan variable tertinggi dengan elemen pertama array
    let total = 0; // Digunakan untuk menghitung jumlah dari semua angka

    for(let i: number = 0; i < aray.length; i++) { // Melakukan loop angka dari dalam aray
        let arayValue = aray[i]; // Menampung nilai aray kedalam variable arayValue
        if(arayValue < terkecil) { // Pengkondisian arayValue jika lebih kecil maka akan memperbarui terkecil dengan arayValue
            terkecil = arayValue 
        } else if (arayValue > terbesar) { // Pengkondisian arayValue jika lebih besar maka akan memperbarui terbesar dengan arayValue
            terbesar = arayValue;
        }

        total += arayValue // Menambahkan niali arayValue ke dalam total
    } 

    let rataAverage = total / aray.length; // Menghitung rata-rata dengan membagi total dengan panjagn array
    return { // Mengembalikkan nilai hasil ke dalam object
        lowest: terkecil,
        highest: terbesar,
        average: rataAverage,
    }
}
console.log(getDataAvg(arr));


// 02.
let fruit: string[] = ['apple', 'banana', 'cherry', 'date'];
function joinWord(words) {
    let result = '';
    for(let i = 0; i < words.length; i++) {
        if(i === words.length -1) {
            result += "and " + words[i];
        } else {
            result += words[i] + ", ";
        }
    }
    return result;
}
console.log(joinWord(fruit));


// 03.
// function secondSmalestWord(arr) {
//     arr.sort((a, b) => a - b);
//     console.log(arr);
//     let first = arr[0];
//     let second = arr[arr.length - 1];
//     for(let i = 0; i < arr.length; i++) {
//         console.log(i);
//         if(){}
//     } 
// }

// console.log(secondSmalestWord(num2));

// 04.
function addArray(arr1, arr2) {
    const result = [];

    for(let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i] + arr2[i]; // Menjumlahkan nilai array1 dan array2 yang ditampung oleh variabel result
    }

    return result;
}
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
console.log(addArray(array1, array2));


// 05. 
function addNewElement(arr, newElement) {
    if(!arr.includes(newElement)) { // Memeriksa apakah nilai sudah ada di dalam array
        arr.push(newElement); // Jika tidak ada maka nilai akan dipush ke dalam array
    }

    return arr; // Membalikkan nilai array
}

const numb1 = [1, 2, 3, 4];
console.log(addNewElement(numb1, 4));

const numb2 = [1, 2, 3, 4];
console.log(addNewElement(numb2, 7));


// 06. 
function mixedArray(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') { // Memeriksa tipe nilai number
            total += arr[i];
        }
    }

    return total;
}

const mxdArray = ["3", 1, "String", null, false, undefined, 2]
console.log(mixedArray(mxdArray));



// 07. 
function insertArr(max, num) {

} 


// 08.
function joinArray(arr1, arr2) {
    let result: number [] =[...arr1, ...arr2];
    return result;
}

const no1 = [1, 2, 3];
const no2 = [4, 5, 6];
console.log(joinArray(no1, no2));


// 09.
// function duplicatedArray(arr) {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === )
//     }
// }


// 10.
function selisihArray(arr1, arr2) {
    let result = [];
    for (let num of arr1) {
        if (!arr2.includes(num)) {
            result.push(num);
        }
    }

    // Tambahkan elemen dari arr2 yang tidak ada di arr1
    for (let num of arr2) {
        if (!arr1.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

const selisih1 = [1, 2, 3, 4, 5];
const selisih2 = [3, 4, 5, 6, 7];
console.log(selisihArray(selisih1, selisih2));
