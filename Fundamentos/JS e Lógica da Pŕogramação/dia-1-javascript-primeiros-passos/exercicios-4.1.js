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