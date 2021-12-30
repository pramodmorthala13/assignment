import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";



function App() {
  return (
    <>
    <NavbarComp/>
    <div className="m-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" >
          <Route path=":urlid" element={<History/>}/>
          <Route index element={<History/>}/>
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
