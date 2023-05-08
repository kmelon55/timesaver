import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alarm from './pages/Alarm';
import Reco from './pages/Reco';
import Table from './pages/Table';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Alarm' element={<Alarm />}/>
        <Route path='/Reco' element={<Reco />}/>
        <Route path='/Table' element={<Table />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Mypage' element={<Mypage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
