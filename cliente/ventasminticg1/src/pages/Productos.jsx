import React from 'react'
import SideBar from '../components/SideBar'
import '../styles/bootstrap.css'

const Productos = ()=>{
    return (
      <div>
        <h1 className="titulo">Lista de Productos</h1>
        
        <div id="exteriorTabla">
        <div className="tabla">
        <div id="TableBoostrap">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>PRODUCTO</th>
                <th>CÓDIGO</th>
                <th>FECHA</th>
                <th>CANTIDAD</th>
                <th>VALOR VENTA</th>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>Cables cohaxiales</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
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
      <SideBar />
      </div>
    );
}
export default Productos