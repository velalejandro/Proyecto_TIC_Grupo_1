import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import '../styles/bootstrap.css'
import Axios from "axios";

// const Productos = ()=>{
class Productos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productos: [],
      }
      this.getProductos = this.getProductos.bind(this);
    }
  
    componentDidMount() {
      this.getProductos();
    }
  
    getProductos = async () => {
      await Axios.get('http://localhost:4001/api/products')
        .then(res => {
          this.setState({ productos: res.data.productos});
          console.log(res.data.productos);
        }).catch((error) => {
          console.log(error);
        });
    }

    render() {
    return (
      <div>
        <h1 className="titulo">Lista de Productos</h1>
        <SideBar />
        <div id="exteriorTabla">
        <div className="tabla">
        <div id="TableBoostrap">
            <input class="form-control" value={this.state.text} onChange={(text) => this.filter(text)}/>
          
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>CÓDIGO</th>
                <th>FECHA</th>
                <th>NOMBRE</th>
                <th>DESCRIPTCION</th>
                <th>STOCK</th>
                <th>PRECIO ENTRANTE</th>
                <th>PRECIO SALIENTE</th>
                <th>CATEGORIA</th>
              </tr>
                  {
                    this.state.productos.map(producto =>
                      <tr key={producto.id}>
                        <th>{producto.code}</th>
                        <th>{producto.registration_date}</th>
                        <th>{producto.name}</th>
                        <th>{producto.description}</th>
                        <th>{producto.stock}</th>
                        <th>{producto.purchase_price}</th>
                        <th>{producto.sale_price}</th>
                        <th>{producto.category.name}</th>
                      </tr>
                    )
                  }
            </tbody>
          </table>
        </div>
        {/* Fin tabla */}
        <hr />
        <div className="row  marginFormu">
          <h1 className="tituloForm">PRODUCTOS</h1>
          <div className="col-12">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputProductCode" className="form-label">
                  Código del Producto
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="inputProductCode"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="nombreProduct" className="form-label">
                  Nombre del Producto
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="inputProductCode"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="cantidadProduct" className="form-label">
                  Valor Unitario:
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cantidadProduct" className="form-label">
                  Estado:
                </label>
                <select
                  className="form-control"
                  aria-label=".form-select-sm example"
                >
                  <option selected="selected">Seleccione</option>
                  <option>Disponible</option>
                  <option>No Disponible</option>
                </select>
              </div>
              <div className="col-12" id="botonAdd">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="saveEdit"
                  onclick="clickChange()"
                >
                  Añadir
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
      </div>
      </div>
    );
  }
}
export default Productos