import React from 'react';
import google from '../Recursos-graficos/Google.png'

import '../styles/styles.css';


const Login = () => {
    return(
      <div className="fondo">
        <main>
        <section>
          <div className="imagen-login">
          </div>
          <div className="inicio-login">
            <div className="logoI">
            </div>
            <h3 className="texto-login">Iniciar Sesión</h3>
            <div className="inputs">
              <input type="text" id="email" name="email" className="email-login" placeholder="Correo Electrónico" />
              <br />
              <input type="password" id="password" className="password-login" placeholder="Contraseña" />
            </div>
            <div className="box-password">
              <h4 className="remember-password">Recordar contraseña</h4>
              <div className="wrapper">
                <input type="checkbox" id="switch" />
                <label htmlFor="switch" className="switch_label">
                  <span className="onf_btn" />
                </label>
              </div>
            </div>
            <div className="box-password2">
              <h4 className="forget-password">¿Haz olvidado tu contraseña?</h4>
            </div>
            <div className="separador" />
            <br />
            <button className="google">
              <div className="imagen-google"><img className="img" src={google} alt="google" /></div>GOOGLE</button>
            <br />
            <a href="ListarVentas.html"><button className="enter-login">Entrar</button></a>
          </div> 
        </section>
      </main>
      </div>
    );
}
export default Login;
