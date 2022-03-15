/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
  (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
const changeText = () =>{
       document.getElementsByTagName("p")[0].innerText = "Daqui a dois anos, me vejo empregada, realizando os meus sonhos, e muito feliz";
 }
changeText();

const correctText = () => {
       document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaEscript";
}
correctText();

const changeToGreen = () => {
       let changeGreen = document.getElementsByClassName("main-content");
       for (let index = 0; index < changeGreen.length; index += 1){
              changeGreen[index].style.backgroundColor = "rgb(76,164,109)";
              console.log(changeGreen[index]); 

       }
}
changeToGreen();

const changeToWhite = () => {
       let changeWhite = document.getElementsByClassName("center-content");
       for (let index = 0; index < changeWhite.length; index += 1){
              changeWhite[index].style.backgroundColor = "white";


       }
}
changeToWhite();

const changeToCapital = () => {
       let toCapital = document.getElementsByTagName("p");
       for (let index = 0; index < toCapital.length; index += 1){
              toCapital[index].innerHTML = toCapital[index].innerHTML.toUpperCase();
              console.log(toCapital[index]);
       }
}

changeToCapital();
  