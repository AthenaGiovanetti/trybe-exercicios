/*const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} 

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const currentHour = 15;
let message = "";
if(currentHour >= 22){
  console.log(message = "Não deveríamos comer nada, é hora de dormir");
}
else if(currentHour >=18 && currentHour <22){
  console.log(message = "Rango da noite, vamos jantar :D");
}
else if(currentHour >=14 && currentHour <18){
  console.log(message = "Vamos fazer um bolo pro café da tarde");
}
else if(currentHour >=11 && currentHour <=14){
  console.log(message = "Hora do almoço!");
}
else if(currentHour >=4 && currentHour <=11){
  console.log(message = "Hmmm,cheiro de café recém passado");
}
console.log(message);

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = "quarta-feira";
if(weekDay = "segunda-feira" || "terça-feira" ||"quarta-feira" || "quinta-feira" || "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe");
}
else if(weekDay = "sábado" || "domingo" ){
  console.log("FINALMENTE. descanso merecido UwU");
}

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); 

console.log(!0);*/

let resultado ="Aprovada";

switch (resultado){
case "Aprovada":
console.log("Parabéns");
break;
case "Reprovada":
console.log("Infelizmente, não foi dessa vez!");
break;
case "Lista de espera":
console.log("Talvez, em breve");
break;
default:
console.log("Não se aplica");
}