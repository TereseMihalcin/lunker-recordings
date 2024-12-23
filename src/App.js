import './App.css';
import Home from "./components/home";
import Navigation from "./components/navigation";
import Contact from "./components/contact";
import Brains from "./components/brains";
import Father from "./components/father";
import Footer from "./components/footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
      <Navigation />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brains" element={<Brains />} />
        <Route path="/father" element={<Father />} />
        </Routes> 
        
      </Router>

      <Footer />
      
    </div>
  );
  
}
 export default App;

// function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button>
//       </div>
//       <div className="board-row">
//         <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button>
//       </div>
//       <div className="board-row">
//         <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button>
//       </div>
//     </>
//   );
// }
// export default Board;

