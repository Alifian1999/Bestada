import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Beranda from './pages/Beranda';
import Register from './pages/Register';
import RequestService from './pages/RequestService';
import ErrorPage from './pages/ErrorPage';
import SubmitSuccess from './pages/SubmitSuccess';
import HistoryKeluhan from './pages/History';
import DetailItem from './pages/DetailItem'
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState('')
  const [idUser, setIdUser] = useState('')
  console.log(token);
  console.log(idUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login setToken={setToken} setIdUser={setIdUser}/>}/>
          <Route path='/beranda' element={<Beranda/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/beranda/request-service' element={<RequestService token={token}/>} />
          <Route path='/error' element={<ErrorPage/>} />
          <Route path='/success' element={<SubmitSuccess/>}/>
          <Route path='beranda/history-keluhan' element={<HistoryKeluhan/>}/>
          <Route path='/beranda/history-keluhan/detail-item' element={<DetailItem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
