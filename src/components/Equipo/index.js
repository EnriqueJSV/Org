import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracion
    // esto es lo mismo que escribir * const colorPrimario = props.datos.colorPrimario *
    const { colorPrimario, /*colorSecundario,*/ titulo, id } = props.datos 
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    const obj = {
        // backgroundColor: colorSecundario,
        backgroundColor: hexToRgba(colorPrimario, 0.2)
    }

    const titleStyle = {borderColor: colorPrimario}

    // Muestra solo los que tengan algun empleado
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    // value={colorSecundario}
                    value={colorPrimario}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={titleStyle} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario} 
                            eliminarColaborador={eliminarColaborador}
                        /> )
                    }
                </div>
            </section>
        }
    </>
}
export default Equipo