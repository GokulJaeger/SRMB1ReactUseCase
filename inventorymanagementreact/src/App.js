import './App.css';
import Home from './components/home/Home';
import AdminLogin from './components/admin/login/AdminLogin';
import MaintenanceLogin from './components/maintenance/MaintenanceLogin';
import ManagementLogin from './components/management/ManagementLogin';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import ForgotCredentials from './components/admin/login/ForgotCredentials';
import About from './components/about/About';
import CheckGoods from './components/maintenance/CheckGoods';
import CheckStocks from './components/maintenance/CheckStocks';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/app' exact component={App}></Route>
          <Route path='/admin' exact component={AdminLogin}></Route>
          <Route path='/maintenance' exact component={MaintenanceLogin}></Route>
          <Route path='/management' exact component={ManagementLogin}></Route>
          <Route path='/admindashboard' exact component={AdminDashboard}></Route>
          <Route path='/forgotcredentials' exact component={ForgotCredentials}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/checkgoods' component={CheckGoods}></Route>
          <Route path='/checkstocks' component={CheckStocks}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;


