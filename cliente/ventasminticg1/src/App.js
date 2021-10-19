import React from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {
  const responseGoogle =(resp) => 
  {
    console.log(resp);
  };
  
  return (
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Iniciar Sesión con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} />
  );
}

export default App;
