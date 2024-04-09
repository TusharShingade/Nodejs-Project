
import './App.css';
import {Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { Userhome } from './Components/Userhome';



function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/userhome' element={<Userhome></Userhome>}></Route>

      </Routes>
    </div>
  );
}

export default App;
