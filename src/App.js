import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/LoginPage';
import Beranda from './pages/BerandaPage';
import Register from './pages/RegisterPage';
import RequestService from './pages/RequestServicePage';
import ErrorPage from './pages/ErrorPage';
import SubmitSuccess from './pages/SuccessPage';
import HistoryKeluhan from './pages/HistoryPage';
import DetailItem from './pages/DetailKeluhanPage'
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/beranda' element={<Beranda/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/beranda/request-service' element={<RequestService/>} />
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
