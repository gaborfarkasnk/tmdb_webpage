
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Listview from "./components/Listview";
import "./css/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element = {<Listview/>}/>
          <Route path="/tvshows" element = {<Listview/>}/>
          <Route path="/people" element = {<Listview/>}/>
        </Routes>

      </div>
      <Footer/>
    </div>

    </BrowserRouter>
  );
}

export default App;
