import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StylesNav.css';


const SideBar = () =>{
    return (
      <div>
          <nav id="herramientas">
            <div className="organizar-herramientas">
              <h3 className="tituloH">Herramientas</h3>
              <h5 id="fecha" className="fecha-hoy">
                Fecha de Hoy
              </h5>
              <div className="separarH" />
              <ul>
                <li>
                  <Link to="/">
                    <i className="fas fa-home" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-trash" />
                    Papelera
                  </Link>
                </li>
              </ul>
              <div className="separar" />
              <ul>
                <li clasName="itemBar">
                  <Link to="/productos">
                    <i className="fas fa-box-open" />
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/ListarVentas.html">
                    <i className="fas fa-dollar-sign" />
                    Ventas
                  </Link>
                </li>
                <li>
                  <Link to="/usuarios">
                    <i className="fas fa-users" />
                    Administrar Usuarios
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-user-check" />
                    Administrar Vendedores
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-house-user" />
                    Administrar Roles
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>
        
    );
}
export default SideBar
