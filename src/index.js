import validator from './validator.js';

//cambio de página 1 a 2
function eventSecondPage(){
   
    document.getElementById("firstPage").style.display= "none"; //ocultar página
    document.getElementById("secondPage").style.display= "block";//mostrar página
    
}
let buttonInput= document.getElementById("buttonInput");
buttonInput.addEventListener("click", eventSecondPage); //registrar evento onclick

//datos  obstenidos del usuario

 function inputNumber(){   

    let creditCardNumber= parseInt(document.getElementById("creditCardNumber").value) ;
    console.log( creditCardNumber);
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);


    // dato que retorna con digitos ocultos
    let resultFinalOfMaskify = validator.maskify(creditCardNumber);
    document.getElementById("creditCardNumber").value= resultFinalOfMaskify ;

    //dato que retorna si la tarjeta es valida o no
    let resultFinalOfIsValid = validator.isValid(creditCardNumber);
    let nameUsuario= document.getElementById("nameUsuario").value ;

     if(resultFinalOfIsValid==true){
        alert(nameUsuario + " , el número de tu tarjeta es válido");
     }
     else{
        alert(nameUsuario + ", el número de tu tarjeta no es válido");

     }


 }

 let buttonNumber= document.getElementById("buttonNumber");
 buttonNumber.addEventListener("click",inputNumber) ;



