import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {

    const {nombre, puesto, foto, id} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    // linea 11
    // Es importante que sea un arrow function para que se elimine cuando se da clic, de manera contraria se ejecuta y borra todo
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt="foto perfil colaborador" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador