import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './componentes/Login';
import Navbar from './componentes/Navbar';
import Register from './componentes/Register';
import Profile from './componentes/Profile';

function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
</>
  );
}

export default App;
