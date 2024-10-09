// Example
interface IUser {
    email: string;
    password: string;
    name: string;
    setPassword: (password: string) => void;
    getPassword: () => void;
}

class User implements IUser {
    email;
    name;
    #password;
    
    constructor(_email: string, _name: string) {
        this.email = _email;
        this.name = _name;
    }

    setPassword(password: string) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
}

const newUser = new User("bayu@gmail.com", "Bayu Setiawan");
console.log(newUser.email);
console.log(newUser.name);
console.log(newUser.setPassword("asd123"));
console.log(newUser.getPassword("asd123"));


// function dataStudent(students) {
//     const processData = students.map(student => {
//         return {
//             Name: student.Nama,
//             Email: student.Email,
//             Age: student.Age,
//             Score: student.Score,
//         }
//     });

//     return processData;
// }

// const arrayStudents = [
//     {Nama: "Adi", Email: "adi@email.com", Age: 15, Score: 80},
//     {Nama: "Anisa", Email: "anisa@email.com", Age: 16, Score: 85},
// ]; 

// const resultStudent = dataStudent(arrayStudents);
// console.log(resultStudent);

// const highest = Math.max(resultStudent.score);
// console.log(highest);


// 01. Student
interface IStudent {
    name: string;
    email: string;
    age: number;
    score: number;
}

const students: IStudent[] = [
    {
        name: "Egha",
        email: "egha@gmail.com",
        age: 16,
        score: 85,
    },
    {
        name: "Nadia",
        email: "nadia@gmail.com",
        age: 15,
        score: 80,
    },
    {
        name: "Rahmat",
        email: "rahmat@gmail.com",
        age: 17,
        score: 90,
    },
]

interface IScore {
    score: {
        highest: number;
        lowest: number;
        average: number;
    };
    age: {
        highest: number;
        lowest: number;
        average: number;
    };
}

function calculate(arr: IStudent[]): IScore {
    const result: IScore = {
        score: {
            highest: 0,
            lowest: 0,
            average: 0,
        },
        age: {
            highest: 0,
            lowest: 0,
            average: 0,
        },
    };

    const scores: number[] = [];
    const ages: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        scores.push(arr[i].score);
        ages.push(arr[i].age);
    }

    console.log(scores);
    console.log(ages);
    result.score.highest = Math.max(...scores);
    result.score.lowest = Math.min(...scores);
    result.score.average = scores.reduce((a: number, b: number) => a + b) / arr.length;

    result.age.highest = Math.max(...ages);
    result.age.lowest = Math.min(...ages);
    result.age.average = ages.reduce((a: number, b: number) => a + b) / arr.length;
    
    return result;
}

console.log(calculate(students));


const dataStudent = (arr1, arr2) => {
    for(let i: number = 0; i < student1.length; i++){
        let highest = Math.max(arr1[3], arr2[3]);
        let lowest = Math.min(arr1[3], arr2[3]);
        return `Score 
        Highest : ${highest}
        Lowest : ${lowest}
        Average : ${(highest + lowest) / }`
    }
}

const student1 = ["Anisa", "anisa@email.com", 16, 85]; 
const student2 = ["Dika", "dika@email.com", 17, 80]; 
const result = dataStudent(student1, student2);
console.log(result);


// 02. Product
interface IProduct {
    name: string;
    price: number;
}

class Product {
    name: string;
    price: number;
    
    constructor(_name: string, _price: number) {
        this.name = _name;
        this.price = _price;
    }

}

class Transaction extends Product {
    total: number;
    product: string;

    constructor(_name: string, _price: number, _total: number, _product: string) {
        super(_name, _price);
        this.total = _total;
        this.product = _product;
    }

}

let produk = new Product("Sabun", 5000);
console.log(produk);

let transaksi = new Transaction("Sabun", 20000, 3, "Sunlight")
let arrayProduk = [];
arrayProduk.push(transaksi);
console.log(arrayProduk);
