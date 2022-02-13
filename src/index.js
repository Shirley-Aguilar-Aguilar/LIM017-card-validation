import validator from './validator.js';

//cambio de página 1 a 2
function eventSecondPage(){
    document.getElementById("firstPage").style.display= "none"; //ocultar página
    document.getElementById("secondPage").style.display= "block";//mostrar página  
}

let buttonInput= document.getElementById("buttonInput");
buttonInput.addEventListener("click", eventSecondPage); //registrar evento click

//validar que número de tarjeta sea solo número
function onlyNumbers(input){
   //este regex valida que solo existan numeros
   var regexOnlyNumbers =  new RegExp('^[0-9]+$');
    
   return regexOnlyNumbers.test(input);
}

function manageOnlyNumbersValidation() {  
   let creditCardNumberValue= document.getElementById("creditCardNumber").value; 
   console.log("que cosa capturamos: " + creditCardNumberValue);
   //si el numero de tarjeta no hace match con el regex de solo numeros
   if (creditCardNumberValue !== '') {
      if(!onlyNumbers(creditCardNumberValue)) {
         document.getElementById("dataNoValid").style.display= "block";
      }
   }
}

let creditCardNumber= document.getElementById("creditCardNumber");
creditCardNumber.addEventListener("input", manageOnlyNumbersValidation);

      
 //datos  obstenidos del usuario
function inputNumber(){   
   document.getElementById("dataNoValid").style.display= "none";
   let creditCardNumber= parseInt(document.getElementById("creditCardNumber").value) ;
   console.log( creditCardNumber);
   
   validator.isValid(creditCardNumber);
   validator.maskify(creditCardNumber);

   // dato que retorna con digitos ocultos
   let resultFinalOfMaskify = validator.maskify(creditCardNumber);
   document.getElementById("creditCardNumber").value= resultFinalOfMaskify ;

   //dato que retorna si la tarjeta es valida o no
   let resultFinalOfIsValid = validator.isValid(creditCardNumber);
   if (resultFinalOfIsValid==true) {
        document.getElementById("cardValid").style.display= "block";
   } else {
        document.getElementById("cardNotValid").style.display= "block"; 
   }
}

let buttonNumber= document.getElementById("buttonNumber");
buttonNumber.addEventListener("click",inputNumber) ;

//limpiar datos
function clearDates(){
   document.getElementById("formu").reset();
   document.getElementById("cardValid").style.display= "none";
   document.getElementById("cardNotValid").style.display= "none";
   document.getElementById("dataNoValid").style.display= "none";  
}

let buttonClear= document.getElementById("buttonClear");
buttonClear.addEventListener("click",clearDates) ;

