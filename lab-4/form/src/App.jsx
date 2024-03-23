import { BrowserRouter } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Router from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar></CustomNavbar>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
