/* eslint-disable react/prop-types */
import '../hojas-de-estilo/Pantalla.css'
// Esto es definir el componente como una función flecha en lugar de usar la sintaxis function.
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;