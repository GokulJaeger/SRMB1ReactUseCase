import './App.css';
import Home from './components/home/Home';
import AdminLogin from './components/admin/login/AdminLogin';
import ManagerLogin from './components/manager/login/ManagerLogin';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import About from './components/home/About';
import ManagerDashboard from './components/manager/dashboard/ManagerDashboard';
import CheckerLogin from './components/checker/login/CheckerLogin';
import ForgotAdmin from './components/admin/login/ForgotAdmin';
import ForgotManager from './components/manager/login/ForgotManager';
import CheckerDashboard from './components/checker/dashboard/CheckerDashboard';
import ForgotChecker from './components/checker/login/ForgotChecker';
import VendorLogin from './components/vendor/login/VendorLogin';
import VendorDashboard from './components/vendor/dashboard/VendorDashboard';
import ForgotVendor from './components/vendor/login/ForgotVendor';
import AdminManagement from './components/admin/manageusers/AdminManagement';
import CheckerManagement from './components/admin/manageusers/CheckerManagement';
import ManagerManagement from './components/admin/manageusers/ManagerManagement';
import VendorManagement from './components/admin/manageusers/VendorManagement';
import AdminAlerts from './components/admin/alert/AdminAlerts';
import Request from './components/admin/request/Request';
import Shelf from './components/admin/shelf/Shelf';
import Warehouse from './components/admin/warehouse/Warehouse';
import OrderDetails from './components/admin/warehouse/OrderDetails';


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
          <Route path='/vendorlogin' exact component={VendorLogin}></Route>
          {/* Dashboard */}
          <Route path='/admindashboard' exact component={AdminDashboard}></Route>
          <Route path='/managerdashboard' exact component={ManagerDashboard}></Route>
          <Route path='/checkerdashboard' exact component={CheckerDashboard}></Route>
          <Route path='/vendordashboard' exact component={VendorDashboard}></Route>

          {/* Forgot */}
          <Route path='/forgotadmin' exact component={ForgotAdmin}></Route>
          <Route path='/forgotmanager' exact component={ForgotManager}></Route>
          <Route path='/forgotchecker' exact component={ForgotChecker}></Route>
          <Route path='/forgotvendor' exact component={ForgotVendor}></Route>
          {/* admin dashbord */}
          <Route path='/adminmanagement' exact component={AdminManagement}></Route>
          <Route path='/checkermanagement' exact component={CheckerManagement}></Route>
          <Route path='/managermanagement' exact component={ManagerManagement}></Route>
          <Route path='/vendormanagement' exact component={VendorManagement}></Route>
          <Route path='/adminalert' exact component={AdminAlerts}></Route>

          <Route path='/request' exact component={Request}></Route>
          <Route path='/shelf' exact component={Shelf}></Route>
          <Route path='/warehouse' exact component={Warehouse}></Route>
          <Route path='/orderdetails' exact component={OrderDetails}></Route>
       
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;


