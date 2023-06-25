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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
