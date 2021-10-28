import React from 'react';
import Productos from '../pages/Productos';
import GoogleLogin from 'react-google-login';
import '../styles/styles.css';



const Login = () => {
  function inicio(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Productos />;
    }
    return <Login />;
  }
  

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
            <div className="google">
            <GoogleLogin className="google-login" 
              clientId="304541528584-pu6tp6dmmvtahco73t0qqp43aise7psn.apps.googleusercontent.com"
              buttonText="Entrar con Google"
              onSuccess={inicio}
              onFailure={false}
              cookiePolicy={'single_host_origin'}
            />
              </div>
            <br />
            <a href="/Productos"><button className="enter-login">Entrar</button></a>
          </div> 
        </section>
      </main>
      </div>
    );
}
export default Login;