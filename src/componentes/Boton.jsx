/* eslint-disable react/prop-types */
import '../hojas-de-estilo/Boton.css'
function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor!='.') && (valor!='=');
  };

    return (
      // La sintaxis del onClick es de función anónima porque sino lo que hace es devolver un valor.
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.handleClic(props.children)}>
        {props.children}
      </div>
    );
}

export default Boton