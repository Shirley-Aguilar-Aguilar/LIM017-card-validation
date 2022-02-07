import validator from './validator.js';

//cambio de página 1 a 2
function eventSecondPage(){
   
    document.getElementById("firstPage").style.display= "none"; //ocultar página
    document.getElementById("secondPage").style.display= "block";//mostrar página
    
}
var buttonInput= document.getElementById("buttonInput");
buttonInput.addEventListener("click", eventSecondPage); //registrar evento onclick

//datos  obstenidos del usuario

 function inputNumber(){   

    var creditCardNumber= parseInt(document.getElementById("creditCardNumber").value) ;
    console.log( creditCardNumber);
    validator.isValid(creditCardNumber);
 }

 var buttonNumber= document.getElementById("buttonNumber");
 buttonNumber.addEventListener("click",inputNumber) ;


//ocultar 5 primeros digitos de la tarjeta






