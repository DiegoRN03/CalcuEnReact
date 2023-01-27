import { Component } from "react";
import React from "react";
const MyCalculator = (props) => {

     const [calc, setCalc]  = React.useState({
      current: "0",
      total: "0",
      esPrimero: true,
      preOp: ""
     })

     function handleNumber(number) {
      let nuevoNum = number;
      if (!calc.esPrimero){
        nuevoNum = calc.current + number
      }
      

      setCalc({current: nuevoNum, total: calc.total, esPrimero: false, preOp: calc.preOp})

     }

    


//después:
function handleOperator(number){
  if (number === "=") {
    handleEquals();
  } else {
    const total = Do_Calcular();
    setCalc({current: total.toString(),total:total.toString(), esPrimero: true, preOp: number});
  }
}


  
     
      function Do_Calcular(){
       
         let total = parseInt(calc.total)
     
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
        }
        return total;
      }

   

      //Opcional
     function renderDisplay (number){
      
      return calc.current
     }
     
     function handleClear() {
      setCalc({
        current: "0",
        total: "0",
        esPrimero: true,
        preOp: "",
      });
     }

     function handleEquals () {
      let total = Do_Calcular()
         setCalc({
           current: total.toString(),
           total: total.toString(),
           esPrimero: true,
           preOp: "=",
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
    <button className={props.className} 
    //Funcion callback cuando se da click ejecutamos el metodo onClick que nos regresa un number
    onClick={ () => props.onClick(props.number)}>
    {props.number} </button>
  )
}




export default MyCalculator;