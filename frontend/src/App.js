import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & components
import Login from './pages/Login';
import OlvidarContra from './pages/OlvidarContra';
import MenuPrincipal from './pages/MenuPrincipal';
import MenuPersona from './pages/MenuPersona';
import RegistrarPersonal from './pages/RegistrarPersonal';
import EliminarPersona from './pages/EliminarPersona';
import EditarPersona from './pages/EditarPersona';
import PersonaEditar from './pages/PersonaEditar';
import PersonaEliminar from './pages/PersonaEliminar';
import MenuEquipoTrabajo from './pages/MenuEquipoTrabajo';
import EquipoTrabajo from './pages/EquipoTrabajo';
import EditarEquipoTrabajo from './pages/EditarEquipoTrabajo';
import BuscarEditarEquipo from './pages/BuscarEditarEquipo';
import Estudiante from './pages/Estudiante';
import PlanTrabajo from './pages/PlanTrabajo';
import MenuPlanTrabajo from './pages/MenuPlanTrabajo';
import VerPlanTrabajo from './pages/VerPlanTrabajo';
import EditarPlanTrabajo from './pages/EditarPlanTrabajo';
import CrearActividad from './pages/CrearActividad';
import VerActividad from './pages/VerActividad';
import ModificarActividad from './pages/ModificarActividad';
import Consultas from './pages/Consultas';
import ConsultaEstudiante from './pages/ConsultaEstudiante';
import ConsultaPlanTrabajo from './pages/ConsultaPlanTrabajo';
import Comentar from './pages/Comentar';
import ComentarTexto from './pages/ComentarTexto';
import ComentarEditar from './pages/ComentarEditar';
import EditarEstudiante from './pages/EditarEstudiante';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="pages">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/OlvidarContra" element={<OlvidarContra />} />
          <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
          <Route path="/MenuPersona" element={<MenuPersona />} />
          <Route path="/RegistrarPersonal" element={<RegistrarPersonal />} />
          <Route path="/EliminarPersona" element={<EliminarPersona />} />
          <Route path="/EditarPersona" element={<EditarPersona />} />
          <Route path="/PersonaEditar" element={<PersonaEditar />} />
          <Route path="/PersonaEliminar" element={<PersonaEliminar />} />
          <Route path="/MenuEquipoTrabajo" element={<MenuEquipoTrabajo />} />
          <Route path="/EquipoTrabajo" element={<EquipoTrabajo />} />
          <Route path="/EditarEquipoTrabajo/:id" element={<EditarEquipoTrabajo />} />
          <Route path="/BuscarEditarEquipo" element={<BuscarEditarEquipo />} />
          <Route path="/Estudiante" element={<Estudiante />} />
          <Route path="/PlanTrabajo" element={<PlanTrabajo />} />
          <Route path="/MenuPlanTrabajo" element={<MenuPlanTrabajo />} />
          <Route path="/VerPlanTrabajo/:id" element={<VerPlanTrabajo />} />
          <Route path="/EditarPlanTrabajo" element={<EditarPlanTrabajo />} />
          <Route path="/CrearActividad/:id" element={<CrearActividad />} />
          <Route path="/VerActividad/:id" element={<VerActividad />} />
          <Route path="/ModificarActividad/:id" element={<ModificarActividad />} />
          <Route path="/Consultas" element={<Consultas />} />
          <Route path="/ConsultaEstudiante" element={<ConsultaEstudiante />} />
          <Route path="/ConsultaPlanTrabajo" element={<ConsultaPlanTrabajo />} />
          <Route path="/Comentar" element={<Comentar />} />
          <Route path="/ComentarTexto" element={<ComentarTexto />} />
          <Route path="/ComentarEditar" element={<ComentarEditar/>} />
          <Route path="/EditarEstudiante/:id" element={<EditarEstudiante/>} />
        </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
