//1 Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;
for(let index = 10; index > 0; index -=1){
    fatorial *= index;
}
console.log(fatorial);

//2 Desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = 'tryber';
for(let index = word.length-1; index >=0 ; index -=1){
    console.log(word[index]);
}

//3 Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0] ;
let menorPalavra = array [0] ;
for(index = 0; index < array.length; index +=1){
    if(menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
    if (maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
}
}  
console.log(menorPalavra);
console.log(maiorPalavra);


//4 Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50

