import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';
import AdminLogin from './components/admin/login/AdminLogin';
import MaintenanceLogin from './components/maintenance/MaintenanceLogin';
import ManagementLogin from './components/management/ManagementLogin';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import ForgotCredentials from './components/admin/login/ForgotCredentials';
import NavBar from './components/header/NavBar';
import About from './components/about/About';
// import UseToken from './components/admin/login/UseToken';
// import 'https://kit.fontawesome.com/6044546ef2.js';
// import 'https://code.jquery.com/jquery-3.4.1.min.js';


function App() {

  // function menu() {
  //   var the_menu = document.getElementsByClassName("m_menu")[0];
  //   the_menu.classList.toggle('open');
  // }

  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");

  // hamburger.addEventListener("click", mobileMenu);

  // function mobileMenu() {
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // }

  // const navLink = document.querySelectorAll(".nav-link");

  // navLink.forEach(n => n.addEventListener("click", closeMenu));

  // function closeMenu() {
  //   hamburger.classList.remove("active");
  //   navMenu.classList.remove("active");
  // }
  // const token = getToken();
  // const { token, setToken } = UseToken();

  // if(!token) {
  //   return <AdminLogin setToken={setToken} />
  // }


  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
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
