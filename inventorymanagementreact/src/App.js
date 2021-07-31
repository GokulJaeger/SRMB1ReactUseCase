import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/home/Home';
import AdminLogin from './components/admin/login/AdminLogin';
import MaintenanceLogin from './components/maintenance/MaintenanceLogin';
import ManagementLogin from './components/management/ManagementLogin';
import { Route, Switch } from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import ForgotCredentials from './components/admin/login/ForgotCredentials';
import About from './components/about/About';


function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/admin' exact component={AdminLogin}></Route>
          <Route path='/maintenance' exact component={MaintenanceLogin}></Route>
          <Route path='/management' exact component={ManagementLogin}></Route>
          <Route path='/admindashboard' exact component={AdminDashboard}></Route>
          <Route path='/forgotcredentials' exact component={ForgotCredentials}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;


