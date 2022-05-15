// Importo React
import React from "react";

// Los componentes se deben exportar para poder ser usados desde otros componentes
export default function HolaMundo(){
    // Aquí es donde podemos ejecutir JS, hacer funciones

    const miFuncion = () => {
        console.log('Mi función desde el componente HolaMundo');
    }

    miFuncion();

    // En el Return va la información que queremos retornar de nuestro componente, es importante que solamente haya UN elemento que encapsule todo, en este caso un div, también se puede utilizar un fragment
    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>Matías Fernández</h2>
        </div>
    
     /* <>
            <h1>Hola Mundo desde un fragment</h1>
            <h2>Matías Fernández</h2>
        </> */
    )
}

/* Otra forma de exportar el componente
export default HolaMundo;
*/ 

export function AdiosMundo2(){
    return(
        <div>
            <h3>AdiosMundo2 desde Hola Mundo</h3>
        </div>
    )
}

// Los props o las propiedades de los componentes de React simplemente es una forma de pasar información de un componente a otro

/* Por ejemplo el componente App.js puede tener varios componentes hijos por ejemplo Saludar.js, en App.js podemos tener mi nombre y si Saludar.js tiene acceso al padre puede utilizar esa info, en caso de no tener acceso solamente mostrará el saludo sin el nombre.

Hay que tomar la información de App.js y enviársela a Saludar.js así ya tiene acceso para utilizarla, si Saludar.js tiene además otros componentes hijos se puede repetir el proceso y que los hijos reutilicen esa información, una propiedad no muere cuando llega al componente hijo, esa propiedad puede ir fluyendo entre los hijos de los componentes que heredan la propiedad.
Por ejemplo que App.js contenga el nombre, Saludar.js contenga el apellido y tome el nombre de App.js, y que al componente hijo de Saludar.js le llegue ambos datos.
*/