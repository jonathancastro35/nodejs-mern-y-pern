import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion';


import ListarNintex from './Componentes/ListarNintex'
import ListarObservacion from './Componentes/ListarObservacion'
import CrearNintex from './Componentes/Nintex'
import CrearObservacion from './Componentes/Observacion'
import CrearPersona from './Componentes/Persona'
import ListarPersonas from './Componentes/ListarPersona'
import CrearContextualizacion from './Componentes/Contextualizacion'
import ListarContextualizacion from './Componentes/ListarContextualizacion'
import ListarPreventas from './Componentes/ListarPreventas'

function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">
        <Route path="/" exact component={ListarNintex} />
        <Route path="/nintex" component={CrearNintex} />
        <Route path="/observacion" component={CrearObservacion} />
        <Route path="/RegistrarPersona" component={CrearPersona} />
        
        <Route path="/EditarNintex/:id" component={CrearNintex} />
        <Route path="/EditarObservacion/:id" component={CrearObservacion} />
        <Route path="/ListarObservaciones" exact component={ListarObservacion} />
        <Route path="/EditarPersona/:id" component={CrearPersona} />
        <Route path="/ListarPersonas" exact component={ListarPersonas} />
        <Route path="/RegistrarContextualizacion" component={CrearContextualizacion} />
        <Route path="/ListarContextualizacion" exact component={ListarContextualizacion} />
        <Route path="/EditarContextualización/:id" component={CrearContextualizacion} />
        <Route path="/ListarPreventas" component={ListarPreventas} />
        
      </div>
      
    </Router>
  );
}

export default App;
