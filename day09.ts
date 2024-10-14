// class Employe {
//   name: string;

//   constructor(__name: string) {
//     this.name = __name;
//   }
// }

// class FullTime extends Employe {
//   workTime: number;
//   withLembur: number;
//   jamLembur: number;
//   noLembur: number;

//   constructor(
//     _name: string,
//     _workTime: number,
//     _jamLembur: number,
//     _withLembur: number,
//     _noLembur: number
//   ) {
//     super(_name);
//     this.workTime = _workTime;
//     this.jamLembur = _jamLembur;
//     this.noLembur = _workTime * 100000;
//     this.withLembur = _workTime * 100000 + _jamLembur * 75000;
//   }

//   daySalary = () => {

//   }
// }

// const fulltime = [new FullTime("Arif", 6, 3), new FullTime("Putri", 6, 2)];

// let result = "";
// fulltime.forEach((value) => {
//   const { name, workTime, jamLembur, noLembur, withLembur } = value;
//   result += `${name} bekerja selama ${workTime} jam dan mendapat upah perhari sebesar ${noLembur} lembur selama ${jamLembur} jam dan hari ini mendapat upah sebesar ${withLembur.toLocaleString("id",
//     { style: "currency", currency: "IDR" }
//   )}\n`;
// });

// console.log(result);

class Employe {
  name: string;

  constructor(__name: string) {
    this.name = __name;
  }
}

class FullTime extends Employe {
  workTime: number;
  withLembur: number;
  jamLembur?: number;
  noLembur: number;

  constructor(
    _name: string,
    _workTime: number,
    _jamLembur: number,
    _withLembur: number,
    _noLembur: number
  ) {
    super(_name);
    this.workTime = _workTime;
    this.jamLembur = _jamLembur;
    this.noLembur = _noLembur;
    this.withLembur = _withLembur;
  }

  daySalary() {
    return `name: ${this.name}, workTime: ${this.workTime} jam, lembur: ${
      this.jamLembur
    } jam, upah: ${(this.noLembur =
      this.workTime * 100000)}, upahLembur : ${(this.withLembur =
      this.jamLembur * 75000)}, total : ${this.noLembur + this.withLembur}`;
  }
}

const fulltime = new FullTime("Arif", 6, 3);
console.log(fulltime.daySalary());

class Employee {}
