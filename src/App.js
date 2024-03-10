import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
