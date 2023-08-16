import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuracion
    // esto es lo mismo que escribir * const colorPrimario = props.datos.colorPrimario *
    const { colorPrimario, colorSecundario, titulo } = props.datos 
    const { colaboradores } = props

    const obj = {
        backgroundColor: colorSecundario,
    }

    const titleStyle = {borderColor: colorPrimario}

    // Muestra solo los que tengan algun empleado
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={titleStyle} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario} 
                        /> )
                    }
                </div>
            </section>
        }
    </>
}
export default Equipo