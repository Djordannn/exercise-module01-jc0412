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

//     if()

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


// const [nae, mail, ge, core] = ["Anisa", "anisa@email.com", 16, 85]; 





const dataStudent = (students) => {
    for(let i: number = 0; i < students.length; i+){
        console.log(students[i]);
        
    }
}

const student1 = ["Anisa", "anisa@email.com", 16, 85]; 