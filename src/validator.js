const validator = {

  // ALGORITMO DE LUHN

  isValid: function (creditCardNumber) {
    // pasar número en array en orden inverso
    function reverseNumber(input) {
      let inputAsString = input.toString();
      let result = "";

      for (let i = inputAsString.length - 1; i >= 0; i--) {
        var digitoAuxiliar = inputAsString[i];
        result = result + digitoAuxiliar;
        console.log(result);
      }
      return parseInt(result);

    }

    // multiplicar x2 los numeros pares  y sumen  cada numero que sea mayor a 10 
    function applyLogicForEvenNumbers(input) {
      let inputAsString = input.toString();
      let result = "";

      var outputAuxCifra = 0;
      for (var i = 0; i <= inputAsString.length - 1; i++) {
        var digitoAuxiliar = parseInt(inputAsString[i]);
        outputAuxCifra = digitoAuxiliar;

        //encontrar los números en las posiciones pares
        if (i % 2 !== 0) {
          console.log("inputAsString[i] tiene posición par y  su valor es: " + digitoAuxiliar);
          var doubleNumber = digitoAuxiliar * 2; // multiplicar los pares
          console.log("digitouxiliar multiplicado *2 es: " + doubleNumber);

          //sumar los digitos multiplicados mayores a 10
          if (doubleNumber >= 10) {
            outputAuxCifra = 1 + (doubleNumber % 10);
          } else {
            outputAuxCifra = doubleNumber;
          }
        }

        result = result + outputAuxCifra.toString();
      }
      return parseInt(result);
    }

    //suma total multiplo de 10
    function getSummOfNumbers(number) {
      let inputAsString = number.toString();
      let sumatoria = 0;
      for (var i = 0; i <= inputAsString.length - 1; i++) {
        sumatoria = sumatoria + parseInt(inputAsString[i]);
      }
    
      return sumatoria;
    }

    //llamando funciones por le enlist
    var reversedNumber = reverseNumber(creditCardNumber);
    var encodedNumber = applyLogicForEvenNumbers(reversedNumber);
    var sumatoriaCifras = getSummOfNumbers(encodedNumber);
    console.log("la sumatoria de cifras es: " + sumatoriaCifras);

    //validar suma total
    var finalResult = sumatoriaCifras % 10 === 0;
    console.log(finalResult);

    return finalResult;
  },


  // OCULTAR TODOS LOS INDICES MENOS LOS 4 ÚTIMOS .

  maskify: function (creditCardNumber) {
    function maskify(input) {
      let inputAsString = input.toString();
      const SIZE_OF_VISIBLE_NUMBERS = 4;

      if (inputAsString.length <= SIZE_OF_VISIBLE_NUMBERS) {
        //retorna el valor sin ningun cambio
      
        return inputAsString;
      } else {
        let maskifyInput = "";

        for (let i = 0; i <= inputAsString.length - 1; i++) {
          if (inputAsString.length - i <= SIZE_OF_VISIBLE_NUMBERS) {
            maskifyInput = maskifyInput + inputAsString[i];
          } else {
            maskifyInput = maskifyInput + "#";
          }
        }
        return maskifyInput;
      }
    }

    console.log("testing with < 4 characters :  " + maskify("1"));
    console.log("testing with > 4 characters:  " + maskify("4083952015263"));
    console.log("testing :  " + maskify("helloworld"));



  },


};

export default validator;
