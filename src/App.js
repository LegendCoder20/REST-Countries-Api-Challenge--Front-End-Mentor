import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {DarkModeProvider} from "./DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Router>
          <Navbar></Navbar>
          <SearchBar></SearchBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </>
  );
}

export default App;
