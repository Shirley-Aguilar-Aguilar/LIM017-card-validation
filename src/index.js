import validator from './validator.js';

//cambio de página 1 a 2
function eventSecondPage(){
   
    document.getElementById("firstPage").style.display= "none"; //ocultar página
    document.getElementById("secondPage").style.display= "block";//mostrar página
    
}
let buttonInput= document.getElementById("buttonInput");
buttonInput.addEventListener("click", eventSecondPage); //registrar evento click


//validar que número de tarjeta sea solo número

//función onlyNumbers(){
//}

//let creditCard= document.getElementById("creditCardNumber").value;
//buttonInput.addEventListener("keypress", onlyNumbers);





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

     if(resultFinalOfIsValid==true){
        document.getElementById("cardValid").style.display= "block";
     }
     else{
        document.getElementById("cardNotValid").style.display= "block"; 
     }

  }

 let buttonNumber= document.getElementById("buttonNumber");
 buttonNumber.addEventListener("click",inputNumber) ;



function clearDates(){
   document.getElementById("nameUSuario").value == "" ;
   document.getElementById("creditCardNumber").value== "";
   document.getElementsByClassName("input")[2].value == "";
   document.getElementsByClassName("input")[3].value == "";
   

}

let buttonClear= document.getElementById("buttonClear");
buttonClear.addEventListener("click",clearDates) ;

        