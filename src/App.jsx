import './App.css'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input+val);
  };
  
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  }
    
  

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton handleClic={agregarInput}>1</Boton>
          <Boton handleClic={agregarInput}>2</Boton>
          <Boton handleClic={agregarInput}>3</Boton>
          <Boton handleClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={agregarInput}>4</Boton>
          <Boton handleClic={agregarInput}>5</Boton>
          <Boton handleClic={agregarInput}>6</Boton>
          <Boton handleClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={agregarInput}>7</Boton>
          <Boton handleClic={agregarInput}>8</Boton>
          <Boton handleClic={agregarInput}>9</Boton>
          <Boton handleClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={calcularResultado}>=</Boton>
          <Boton handleClic={agregarInput}>0</Boton>
          <Boton handleClic={agregarInput}>.</Boton>
          <Boton handleClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
