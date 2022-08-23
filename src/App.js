import './App.css';
import {Routes, Route, BrowserRouter, } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import SuccessModal from './Components/ContactMe/SuccessModal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<Portfolio/>} path='/Portfolio'/>
        <Route element={<ContactMe/>} path='/ContactMe'/>
        <Route element={<SuccessModal/>} path='/SuccessModal'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
