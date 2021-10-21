import React from 'react';
import '../styles/styles.css';
import '../Recursos-graficos/Google.png';
import '../Recursos-graficos/logo-color.png';

const Login = () => {
    return(
        <main>
        <section>
          <div className="imagen-login">
          </div>
          <div className="inicio-login">
            <img className="logo" src='../Recursos-graficos/logo-color.png' alt="logo"/>
            <h3 className="texto-login">Iniciar Sesión</h3>
            <div className="inputs">
              <input type="text" id="email" name="email" className="email-login" placeholder="Correo Electrónico" />
              <br />
              <input type="password" id="password" className="password-login" placeholder="Contraseña" />
            </div>
            <div className="box-password">
              <h4 className="remember-password">Recordar mi contraseña</h4>
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
              <div className="imagen-google"><img className="img" src="../Recursos-graficos/Google.png" alt="google" /></div>GOOGLE</button>
            <br />
            <a href="ListarVentas.html"><button className="enter-login">Entrar</button></a>
          </div> 
        </section>
      </main>

    );
}
export default Login;
