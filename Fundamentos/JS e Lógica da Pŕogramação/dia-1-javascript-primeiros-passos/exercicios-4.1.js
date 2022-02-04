//1
const num1 = 5;
const num2 =520;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
//2
const numA = 777;
const numB = 555;
if(numA > numB){
    console.log(numA);
}
else if(numB > numA){
    console.log(numB);
}

//3
let numC = 1000;
let numD = 5;
let numE = 693;
if(numC > numD && numC > numE){
    console.log(numC);
}
else if(numD > numC && numD > numE){
    console.log(numD);
}
else if(numE > numC && numE >numA){
    console.log(numE);
}
 
//4
const valor = 10;
if(valor > 0){
    console.log("positive");
}
else if(valor < 0){
    console.log("negative");
}
else if(valor = 0){
    console.log("zero");
}

//5

const a = 60;
const b = -40;
const c = 80;
let soma = a + b + c;
if(a > 0 && b > 0 && c > 0 && soma  === 180){
    console.log("true");
}
else{
    console.log("false");
}

//6
let piece = "Bishop";
switch (piece.toLowerCase()){
   case "bishop":
       console.log("diagonals");
       break;
    default:
        console.log("erro");   
        break;
    }
     //7
let nota = 50;
if(nota < 0 || nota > 100){
    console.log("erro")
}
else if(nota >= 90){
    console.log("A");
} 
else if(nota >= 80){
    console.log("B");
}
else if(nota >= 70){
    console.log("C");
} 
else if(nota >= 60){
    console.log("D");
}
else if(nota >= 50){
    console.log("E");
}
else if(nota <50){
    console.log("F");
}


//8

const numX = 5;
const numY = 71;
const numZ = 3;
 if(numX % 2 === 0 || numY % 2 === 0 || numZ % 2 === 0){
     console.log(true);
 }
 else {
     console.log(false);
 }

 //9

const numH = 50;
const numI = 71;
const numJ = 30;
 if(numH % 2 === 0 || numI % 2 === 0 || numJ % 2 === 0){
     console.log(false);
 }
 else {
     console.log(true);
 }

 //10

 const cust = 100;
 const vend = 250;
 let custTot = cust + (cust * 0.2);
 let lucro = vend - custTot
  if(cust < 0 || vend < 0){
      console.log("ERRO");
  }
else {
    console.log(lucro *1000);
}

//11

