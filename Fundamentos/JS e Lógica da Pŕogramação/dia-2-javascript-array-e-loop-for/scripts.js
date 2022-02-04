// Arrays
//1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1];

console.log(menuServices);

//2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio')  ;

console.log(indexOfPortfolio);

//3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

//For
//1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

//For/Of
//1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nomes of names ){
    console.log(nomes);
}

//Exercícios Array e loop for

//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}
//2

let numbersA = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbersA.length; index += 1){
  result += numbersA[index] 
}
console.log(result);

//3 e 4

/*let numbersB = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let divisor= 0;
for (let index = 0; index < numbersB.length; index += 1){
  result += numbersB[index];
  divisor = divisor + 1; 
}
console.log(result / divisor);*/

let numbersB = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < numbersB.length; index +=1){
resultado += numbersB[index];
}
console.log(resultado/numbersB.length);
if(resultado > 20){
    console.log("valor maior que 20");
}
else {
    console.log ("valor menor ou igual a 20");
}

//5
let numbersC = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0
for(let index = 0; index < numbersC.length; index +=1){
    if(numbersC[index] > maiorNumero) {
        maiorNumero = numbersC[index]

    }
}
console.log(maiorNumero);

//6

let numbersD = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantosImpares = 0
for(let index = 0; index < numbersD.length; index +=1){
if(numbersD[index] % 2 !== 0){
   quantosImpares += 1;
}
}
if (quantosImpares === 0) {
    console.log ("nenhum valor ímpar encontrado")
} else  {
    console.log(quantosImpares);
}

//7

let numbersE = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 10;
for(let index = 0; index < numbersE.length; index +=1){
    if(numbersE[index] < menorNumero) {
        menorNumero = numbersC[index]

    }
}
console.log(menorNumero);