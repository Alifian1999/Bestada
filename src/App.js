import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Beranda from './pages/Beranda';
import Register from './pages/Register';
import RequestService from './pages/RequestService';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/beranda' element={<Beranda/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/beranda/request-service' element={<RequestService/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
