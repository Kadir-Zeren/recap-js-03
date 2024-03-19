// let sayi = Number(prompt("Bir sayi giriniz:"));
// console.log(typeof sayi);
// let sayi2 = 10;
// sayi = sayi + sayi2;

// console.log(sayi++);

// console.log(Number("123"));
// console.log(Number("12.3"));
// console.log(Number("0"));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number(null));
// console.log(Number(undefined));

// const myNumber = "threezeroone";
// let myNumber2 = Number(myNumber);
// console.log(Number(myNumber));
// console.log(typeof myNumber2);

// const dolar = "1000";
// const tl = "2000";

// const totalMoney = Number(dolar) + +tl;
// console.log(totalMoney);

// const dolarInt = parseInt(dolar);
// console.log(dolarInt);
// const tlFloat = parseFloat(tl);
// console.log(tlFloat);

// console.log(parseFloat(null));
// console.log(parseFloat(""));

// const myNumber3 = 2000.5;
// console.log(String(myNumber3));

// const calismaSuresi = prompt("Calisma suresi:");
// let maas = prompt("Maasinizi giriniz:");

// if (calismaSuresi >= 10) {
// //   maas = maas * 1.1;
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz:", maas);
//   console.log(`Zamli maasiniz:", ${maas}`);
// } else {
//   console.log("Uzgunuz maasinaza zam yapamiyoruz", maas);
// }

// console.log("Gule gule");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`Zamli maasiniz: ${maas}`);
// }
// console.log("Gule gule");

// const grade = prompt("Please enter your grade:");
// let result = null;

// if (grade < 0) {
//   console.log("Grade can not be small than zer");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != null) {
//   console.log(`Your score:${result}`);
// }

// if (result) {
//   console.log(`Your score:${result}`);
// }

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("Biggest:", n1);
//   }
// }

// if (n1 >= n2 && n1 >= n3) {
//   console.log("Biggest:", n1);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log("Biggest:", n2);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log("Biggest:", n3);
// }

// let Biggest = n1;

// if (n2 >= Biggest) {
//   Biggest = n2;
// }
// if (n3 >= Biggest) {
//   Biggest = n3;
// }
// console.log(`${Biggest} is biggest`);

// const grade = prompt("Please enter your grade:");

// grade >= 50 ? console.log("SUCCEED") : console.log("FAILED");
// const score = grade >= 50 ? "PASSED" : "FAILED";
// console.log(score);

// const score1 = grade >= 50 ? "SUCCEED" : "";
// console.log(score1);

// const speed = 110;

// speed > 120
//   ? console.log("Speedy")
//   : speed >= 90
//   ? console.log("Normal")
//   : console.log("Low Speed");

// if (speed > 120) {
//   console.log("Speedy");
// } else if (speed >= 90) {
//   console.log("Normal");
// } else {
//   console.log("Low Speed");
// }

const age = 18;

let description = "";

// if (age >= 18) {
//   description = "Adult";
// }

// description = age >= 18 ? "Adult" : "";

// age >= 18 && console.log("Adult");

age >= 18 && (description = "Adult");

age >= 18 || (description = "Adult");

console.log(description);
