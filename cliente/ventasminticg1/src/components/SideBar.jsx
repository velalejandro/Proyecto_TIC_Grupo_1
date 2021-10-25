import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StylesNav.css';

const SideBar = () =>{
    return (
      <div>
        <div id="nav-bar">
          <i class="fas fa-sign-out-alt"></i>
          <i class="fas fa-question-circle"></i>
          <i class="fas fa-cog"></i>
          <i class="fas fa-bell"></i>
            <div class="spans">
              <div class="menu-wrapper">
                <div class="hamburger-menu"></div></div></div>
        </div>
          <nav id="herramientas">
            <div className="organizar-herramientas">
              <h3 className="tituloH">Herramientas</h3>
              <h5 id="fecha" className="fecha-hoy">
                Fecha de Hoy
              </h5>
              <div className="separarH" />
              <ul>
                <li>
                  <Link className="inicio" to="/">
                    <i className="fas fa-home" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className="papelera" to="/">
                    <i className="fas fa-trash" />
                    Papelera
                  </Link>
                </li>
              </ul>
              <div className="separar" />
              <ul>
                <li>
                  <Link className="productos" to="/productos">
                    <i className="fas fa-box-open" />
                    Productos
                  </Link>
                </li>
                <li>
                  <Link className="ventas" to="/ventas">
                    <i className="fas fa-dollar-sign" />
                    Ventas
                  </Link>
                </li>
                <li>
                  <Link className="usuarios" to="/usuarios">
                    <i className="fas fa-users" />
                    Usuarios
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>
          </div>

        
    );
}

export default SideBar
