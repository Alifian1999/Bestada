import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
