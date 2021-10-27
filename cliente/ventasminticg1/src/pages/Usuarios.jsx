
import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import '../styles/bootstrap.css'
import Axios from "axios";


class Usuarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    }
    this.getUsuarios = this.getUsuarios.bind(this);
  }

  componentDidMount() {
    this.getUsuarios();
  }

  getUsuarios = async () => {
    await Axios.get('http://localhost:4001/api/users/list')
      .then(res => {
        this.setState({ usuarios: res.data.users});
        console.log(res.data.users);
      }).catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <h1 className="titulo">Usuarios</h1>
       
      <div id="exteriorTabla">
        
        <div className="tabla">
          <div id="agregar" className="row">
            <div className="col-12 text-center">
              <h4 className="text-primary">Gestionar Roles</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="rolename"
                placeholder="Dígite el rol"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <br />
          <div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Rol</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Vendedor</td>
                  <td>
                    <input type="radio" name="rolRadios" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cliente</td>
                  <td>
                    <input type="radio" name="rolRadios" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Administrador</td>
                  <td>
                    <input type="radio" name="rolRadios" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="rolename"
                placeholder="Rol Seleccionado"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Borrar
                </button>
              </div>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Actualizar
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div id="listar" className="row">
            <div className="col-12 text-center">
              <h4 className="text-primary">Gestionar Usuarios</h4>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nombre" />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rol
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/">
                  Vendedor
                </a>
                <a className="dropdown-item" href="/">
                  Administador
                </a>
                <a className="dropdown-item" href="/">
                  Cliente
                </a>
              </div>
            </div>
          </div>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Agregar Usuario
            </button>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th colSpan={5}>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="...Buscar Usuario"
                        />
                      </th>
                    </tr>
                    <tr>
                      <th>Codigo</th>
                      <th>Nombre</th>
                      <th>Username</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.usuarios.map(user =>
                      <tr key={user.id}>
                        <th>{user._id}</th>
                        <th>{user.name}</th>
                        <th>{user.user}</th>
                        <th>{user.email}</th>
                        <th>{user.role.name}</th>
                        <input type="radio" name="userRadios" />
                      </tr>
                    )
                  }
                  </tbody>
                </table>
                <div className="input-group-append">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="rolename"
                      placeholder="Usuario Seleccionado"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        Editar
                      </button>
                    </div>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        Borrar
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Roles
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Vendedor
                    </a>
                    <a className="dropdown-item" href="/">
                      Administador
                    </a>
                    <a className="dropdown-item" href="/">
                      Cliente
                    </a>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario Seleccionado"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      Actualizar Rol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
      </div> 
    );
  }
}
export default Usuarios;