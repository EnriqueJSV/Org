import "./CampoTexto.css"

const CampoTexto = (props) => {

    // console.log("Datos: ",props)
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">

        <label>{props.titulo}</label>

        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        />

    </div>
}

export default CampoTexto