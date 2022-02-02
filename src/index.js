import validator from './validator.js';

console.log(validator);



 

//cambio de página 1 a 2
function eventSecondPage(){
   
    document.getElementById("firstPage").style.display= "none"; //ocultar página
    document.getElementById("secondPage").style.display= "block";//mostrar página
    
}
document.addEventListener("click", eventSecondPage); //registrar evento onclick



