import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alarm from "./pages/Alarm";
import Reco from "./pages/Reco";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import "./App.css";
import Register from "./pages/Register";
import Timetable from "./pages/TimeTable";
import Test from "./pages/test";
import List from "./pages/List";
import Recommend from "./pages/Recommend";
import Selectoptionpage4 from "./pages/option/selectoptionpage4";
import Selectoptionpage5 from "./pages/option/selectoptionpage5";
import Selectoptionpage6 from "./pages/option/selectoptionpage6";
import Selectoptionpage7 from "./pages/option/selectoptionpage7";
import Selectoptionpage8 from "./pages/option/selectoptionpage8";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alarm" element={<Alarm />} />
        <Route path="/Reco" element={<Reco />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Time" element={<Timetable />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/List" element={<List />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/Option1" element={<Selectoptionpage4 />} />
        <Route path="/Option2" element={<Selectoptionpage5 />} />
        <Route path="/Option3" element={<Selectoptionpage6 />} />
        <Route path="/Option4" element={<Selectoptionpage7 />} />
        <Route path="/Option5" element={<Selectoptionpage8 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
