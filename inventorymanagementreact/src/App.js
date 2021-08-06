import './App.css';
import Home from './components/home/Home';
import AdminLogin from './components/admin/login/AdminLogin';
import ManagerLogin from './components/manager/login/ManagerLogin';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import About from './components/about/About';
import CheckGoods from './components/checker/CheckGoods';
import CheckStocks from './components/checker/CheckStocks';
import ManagerDashboard from './components/manager/dashboard/ManagerDashboard';
import CheckerLogin from './components/checker/login/CheckerLogin';
import ForgotAdmin from './components/admin/login/ForgotAdmin';
import ForgotManager from './components/manager/login/ForgotManager';
import CheckerDashboard from './components/checker/dashboard/CheckerDashboard';
import ForgotChecker from './components/checker/login/ForgotChecker';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/app' exact component={App}></Route>
          <Route path='/about' exact component={About}></Route>
          {/* Login Route */}
          <Route path='/adminlogin' exact component={AdminLogin}></Route>
          <Route path='/managerlogin' exact component={ManagerLogin}></Route>
          <Route path='/checkerlogin' exact component={CheckerLogin}></Route>
          {/* Dashboard */}
          <Route path='/admindashboard' exact component={AdminDashboard}></Route>
          <Route path='/managerdashboard' exact component={ManagerDashboard}></Route>
          <Route path='/checkerdashboard' exact component={CheckerDashboard}></Route>
          {/* Forgot */}
          <Route path='/forgotadmin' exact component={ForgotAdmin}></Route>
          <Route path='/forgotmanager' exact component={ForgotManager}></Route>
          <Route path='/forgotchecker' exact component={ForgotChecker}></Route>

          <Route path='/checkgoods' component={CheckGoods}></Route>
          <Route path='/checkstocks' component={CheckStocks}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;


