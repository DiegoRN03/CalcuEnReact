import { Component } from "react";
import React from "react";
//Se crea un componente de tipo funcional llamado MyCalculator que recibe como propiedad "props"
const MyCalculator = (props) => {
  // Se utiliza la función "useState" de React para inicializar el estado del componente
  // El estado incluye la variable "calc" que se inicializa con un objeto vacío con las propiedades:
  // current: "0" -> almacena el número actual ingresado en la calculadora
  // total: "0" -> almacena el resultado de las operaciones realizadas
  // esPrimero: true -> indica si es el primer número ingresado
  // preOp: "" -> almacena el operador seleccionado
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    esPrimero: true,
    preOp: "",
  });
  //Función que maneja los números ingresados en la calculadora, recibe como parámetro "number"
  function handleNumber(number) {
    //Se inicializa una variable "nuevoNum" con el valor de "number"
    let nuevoNum = number;
    //Se verifica si "esPrimero" es falso, si es así se concatena el nuevo número al número actual
    if (!calc.esPrimero) {
      nuevoNum = calc.current + number;
    }

    //Se actualiza el estado, asignando el valor de "nuevoNum" a "current"
    //Además, se mantiene el valor de "total", se cambia "esPrimero" a falso y se mantiene el valor de "preOp"
    setCalc({
      current: nuevoNum,
      total: calc.total,
      esPrimero: false,
      preOp: calc.preOp,
    });
  }

  //Función que maneja los operadores seleccionados en la calculadora, recibe como parámetro "number"

  function handleOperator(number) {
    // Realiza una operacion con la funcion Do_Calcular()
    // la cual retorna el resultado de la operacion
    const total = Do_Calcular();

    //Actualiza el estado de la calculadora
    setCalc({
      //Asigna el valor de "total" como string a "current" y "total"
      current: total.toString(),
      total: total.toString(),
      //Asigna el valor true a "esPrimero" para indicar que se ha terminado la operacion anterior
      esPrimero: true,
      //Asigna el valor de "number" (operador) a "preOp"
      //para almacenar el ultimo operador utilizado
      preOp: number,
    });
  }

  function Do_Calcular() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    // se devuelve el resultado
    return total;
  }

  // Esta función se encarga de renderizar el valor actual en pantalla.
  // Se toma el valor "current" del objeto "calc" y se devuelve como una cadena.
  function renderDisplay(number) {
    return calc.current;
  }
  // Esta función se encarga de reiniciar el estado de la calculadora a sus valores predeterminados.
  // Se asigna a "current" y "total" el valor "0", a "esPrimero" el valor true y a "preOp" el valor vacío.
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      esPrimero: true,
      preOp: "",
    });
  }

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton number="7" onClick={handleNumber} />
      <CalcButton number="8" onClick={handleNumber} />
      <CalcButton number="9" onClick={handleNumber} />
      <CalcButton onClick={handleOperator} className="operator" number="/" />

      <CalcButton number="4" onClick={handleNumber} />
      <CalcButton number="5" onClick={handleNumber} />
      <CalcButton number="6" onClick={handleNumber} />
      <CalcButton onClick={handleOperator} className="operator" number="*" />

      <CalcButton number="1" onClick={handleNumber} />
      <CalcButton number="2" onClick={handleNumber} />
      <CalcButton number="3" onClick={handleNumber} />
      <CalcButton onClick={handleOperator} className="operator" number="-" />

      <CalcButton number="C" onClick={handleClear} />
      <CalcButton number="0" onClick={handleNumber} />
      <CalcButton number="=" onClick={handleOperator} />
      <CalcButton onClick={handleOperator} className="operator" number="+" />
    </div>
  );
}

const CalcButton =  (props) => {
  return (
    // Se crea un boton con una clase que se recibe como propiedad
    <button
      className={props.className}
      //Funcion callback cuando se da click ejecutamos el metodo onClick que nos regresa un number
      // el numero se recibe como propiedad number
      onClick={() => props.onClick(props.number)}
    >
      {props.number}
    </button>
  );
}


//Esta funcion crea un boton que se puede usar para mostrar un numero en la calculadora
//El boton tiene una clase que se recibe como propieda y tiene un evento OnClick que se activa cuando se presiona el botón. El evento OnClick ejecuta una funcion que se recibe como propiedad y le pasa el numero del boton como argumento. El numero se muestra en el boton
export default MyCalculator;
