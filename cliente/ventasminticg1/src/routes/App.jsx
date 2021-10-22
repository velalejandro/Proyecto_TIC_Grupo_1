import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPass from '../containers/RecoveryPass';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Usuarios from '../pages/Usuarios'
import Ventas from '../pages/Ventas';
import Productos from '../pages/Productos'


const App = () =>{
  return(
    <BrowserRouter>
    <Layout>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component ={Login} />
          <Route exact path="/recovery-password" component={RecoveryPass} />
          <Route exact path="/usuarios" component ={Usuarios} />
          <Route exact path= "/ventas" component ={Ventas} />
          <Route exact path= "/productos" component ={Productos} />
          <Route path="*" component={NotFound} />
          
      </Switch>
    </Layout>
    </BrowserRouter>
    
  );
}
export default App;
