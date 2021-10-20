import react from 'react';
class Nav extends React.Component{
    render(){
        return(
    <div>
        <main>
        <section className="nav">
          <nav id="herramientas">
            <div className="organizar-herramientas">
              <h3 className="tituloH">Herramientas</h3>
              <h5 id="fecha" className="fecha-hoy">Fecha de Hoy</h5>
              <div className="separarH" />
              <ul>
                <li><a href="#"><i className="fas fa-home" />Inicio</a></li>
                <li><a href="#"><i className="fas fa-trash" />Papelera</a></li>
              </ul>
              <div className="separar" />
              <ul>
                <li><a href="#"><i className="fas fa-box-open" />Productos</a></li>
                <li><a href="/ListarVentas.html"><i className="fas fa-dollar-sign" />Ventas</a></li>
                <li><a href="#"><i className="fas fa-users" />Administrar Usuarios</a></li>
                <li><a href="#"><i className="fas fa-user-check" />Administrar Vendedores</a></li>
                <li><a href="#"><i className="fas fa-house-user" />Administrar Roles</a></li>
              </ul>
            </div>
          </nav>
          <div className="nav-bar">
            <img src="/Recursos-graficos/logo-blanco.png" alt="" className="logo" />
            <span>
              <i className="fas fa-bell" />
              <i className="fas fa-question-circle" />
              <i className="fas fa-cog" />
              <a className="sign-out" href="/index.html"><i className="fas fa-sign-out-alt" /></a>
            </span>
            <div className="spans">
              <div className="menu-wrapper">
                <div className="hamburger-menu" />	  
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
        )
    }
}
export default Nav