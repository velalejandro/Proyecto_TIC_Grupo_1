import React from 'react'
import '../styles/bootstrap.css'

const Ventas = () =>{
    return(
        <div>
        <div id="TableBoostrap">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>ID VENTA</th> 
                <th>ID PRODUCTO</th>
                <th>FECHA</th>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>VALOR VENTA</th>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
              <tr>
                <td>1122</td>
                <td>001</td>
                <td>01/09/2021</td>
                <td>Cables cohaxiales</td>
                <td>38</td>
                <td>70.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Fin tabla */}
        <hr />
        <div className="row  marginFormu">
          <h1 className="tituloForm">NUEVA VENTA</h1>
          <div className="col-12">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputProductCode" className="form-label">Código del Producto</label>
                <input className="form-control" type="number" name="inputProductCode" />
              </div>
              <div className="col-md-6">
                <label htmlFor="nombreProduct" className="form-label">Nombre del Producto</label>
                <input className="form-control" type="text" name="inputProductCode" readOnly defaultValue="Nombre traido de BD server" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cantidadProduct" className="form-label">Cantidad</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="valorUnit" className="form-label">Valor unitario</label>
                <div className="input-group">
                  <div className="input-group-text">$</div>
                  <input type="number" className="form-control" readOnly />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="nombreProduct" className="form-label">Fecha</label>
                <input className="form-control" type="datetime-local" name="dateShop" readOnly />
              </div>
              <div className="col-md-6">
                <label htmlFor="valorUnit" className="form-label">Valor Total</label>
                <div className="input-group">
                  <div className="input-group-text">$</div>
                  <input type="number" className="form-control" readOnly />
                </div>
              </div>
              <div className="col-12" id="botonAdd">
                <button type="submit" className="btn btn-primary" id="saveEdit" onclick="clickChange()">Añadir</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>

    );
}
export default Ventas;