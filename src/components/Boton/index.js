import "./Boton.css"

const Boton = (props) => {
    return <button className="boton">{props.children}</button> //Se usa children por la estructura que se uso en el Formulario.js
}

export default Boton