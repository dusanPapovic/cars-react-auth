import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCar from './pages/AddCar';
import AppCars from './pages/AppCars';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivateRoute from './components/shared/PrivateRoute';
import GuestRoute from './components/shared/GuestRoute';
import AuthService from "./services/AuthService";
import { useHistory} from 'react-router-dom';

function App() {
  const isAuthenticated=!!localStorage.getItem('token');

  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
  AuthService.logout().then(()=>window.location.reload());
  }

  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            {isAuthenticated &&<div>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/add'>Add new car</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <button onClick={(e)=>logout(e)}>
             Logout
            </button>   
            </div>} 
{!isAuthenticated &&<div>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            </div>}
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/cars'>
            <AppCars />
          </PrivateRoute>
          <PrivateRoute exact path='/add'>
            <AddCar />
          </PrivateRoute>
          <PrivateRoute exact path='/edit/:id'>
            <AddCar />
          </PrivateRoute>
          <PrivateRoute exact path='/profile'>
            <Profile />
          </PrivateRoute>
          <GuestRoute exact path='/login'>
            <Login />
          </GuestRoute>
          <GuestRoute exact path='/register'>
            <Register />
          </GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
