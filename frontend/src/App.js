
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Listview from "./components/Listview";
import "./css/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import More from "./components/More";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Language from "./components/Language";
import MovieDetails from "./components/MovieDetails";

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
          <Route path="/more" element = {<More/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/registration" element = {<Registration/>}/>
          <Route path="/language" element = {<Language/>}/>

          <Route path="/movies/:slug" element = {<MovieDetails/>}/>

        </Routes>

      </div>
      <Footer/>

    </div>

    </BrowserRouter>
  );
}

export default App;
