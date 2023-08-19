import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  // Para no mostrar nada si no hay empleados
  // const [colaboradores, actualizarColaboradores] = useState([])

  // Para mostrar a un empleado por defecto
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/EnriqueJSV.png",
      nombre: "Enrique",
      puesto: "Developer",
      fav: true
    }, 
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/EnriqueJSV.png",
      nombre: "MJ",
      puesto: "Developer",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/EnriqueJSV.png",
      nombre: "Chuculo",
      puesto: "Designer",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/EnriqueJSV.png",
      nombre: "Josué",
      puesto: "Developer",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/EnriqueJSV.png",
      nombre: "María",
      puesto: "Manager",
      fav: false
    }
  ])

  // Lista equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  // Ternario --> condicion ? true : else --linea 16
  // "Corto circuito" ---> condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log(`Nuevo colaborador`, colaborador)
    // Spread operator
    // crea una copia y luego de la coma agrega colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador: ", id)
    // Regresa un arreglo con los colaboradores que tengan diferente el id al que se da click
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar :", color, id)
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    // console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    // console.log("like a: ", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> 
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
          // console.log("Equipo: ",equipo)
      }

      <Footer />

    </div>
  );
}

export default App;
