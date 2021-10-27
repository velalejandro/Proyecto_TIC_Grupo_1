import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { SideBarContext } from './SideBar';
import '../styles/StylesNav.css';

const SideAnimation = () =>{
  const { isShowSidebar, setIsShowSidebar} = useContext(SideBarContext);
    return(
    <div> 
        
      
           <nav className={`herramientas--${isShowSidebar ? 'show' : 'hide'}`}>
            <div className="organizar-herramientas">
              
              <h3 className="tituloH">Herramientas</h3>
              <i className="fas fa-times" 
              role="button"
              onClick={() => setIsShowSidebar(false)}
              />
                
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
    
    )
}
export default SideAnimation;