// 01.
function checkEqual(a: any, b: any): boolean {
    // Bagaimana mengakses property dari object
    const propA = Object.keys(a)[0];
    const propB = Object.keys(b)[0];

    // Bagaimana mengakses value dari object
    const vlueA = Object.values(propA)[0];
    const vlueB = Object.values(propB)[0];

    if(propA === propB && vlueA === vlueB) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEqual({ a: 1 }, { a: 2} ));

// 02.
const twinEqual = (objectA: any, objectB: any) => {
    let result = {};
    for(let i in objectA) {
        console.log(i);
        for(let j in objectB) {
            console.log(j);
            if(objectA[i] === objectB[j]) {
                result[i] = objectA[i] 
            }
        }
    }
    return result;
}
const objA = {a: 1, b: 2, c: 3, h: 4};
const objB = {a: 1, c: 3, h: 4};
console.log(twinEqual(objA, objB));


// 03.
const reStudent = (obj1: any, obj2: any) => {
    // Menggunakan set untuk menyimpan data tanpa duplikat
    const dataNama = new Set(obj1.map(nama => nama.name));
    // Menghapus data objek yang sama
    const deleteArr = obj2.filter(nama => !dataNama.has(nama.name))
    // Menggabungkan objek 
    const newStudents = [...obj1, ...deleteArr];
    // Mengembalikkan nilai
    return newStudents
}

const students1 = [
    {name: "Student1", email: "student1@gmail.com"},
    {name: "Student2", email: "student2@gmail.com"}
]
const students2 = [
    {name: "Student1", email: "student1@gmail.com"},
    {name: "Student3", email: "student3@gmail.com"}
]
const arrayStudent = reStudent(students1, students2)
console.log(arrayStudent);


// 04.
const switchProp = (data: any) => {
    // for(let i of data) {
    //     console.log(i);
        // const dataValue = Object.values(i);
        // console.log(dataValue);
        const dataSwitch = Object.keys(data).reduce((acc, key) => {
            acc[data[key]] = key;
            return acc;
        }, {});

        return dataSwitch;
    // }
}

const dataPegawai = [{name: "David", age: 20}];
console.log(switchProp(dataPegawai));


// 05.
const factorial = (value) => {
    for(let i: number = 5; i > 1; i--) {
        console.log("loop ke ", i);
    }
}

const num = 5;
const resultNum = factorial(num);
console.log(resultNum);
