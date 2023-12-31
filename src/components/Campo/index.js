import "./Campo.css"

const Campo = (props) => {

    // console.log("Datos: ",props)
    const placeholderModificado = `${props.placeholder}...`

    // Esto es lo mismo que const type = props.type
    // De esta manera tambien se pueden agregar valores por defecto
    const { type = "text" } = props

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>

        <label>{props.titulo}</label>

        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />

    </div>
}

export default Campo