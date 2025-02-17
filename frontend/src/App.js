
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Listview from "./components/Listview";
import "./css/main.css"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Listview/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
