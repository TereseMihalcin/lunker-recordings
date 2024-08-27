import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Navigation from "./components/navigation";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navigation>
       {/* <Routes>
        <Route exact path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route
           path="/contact"
             element={<Contact />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
        </Routes>  */}
        


      </Navigation>
      <Home></Home>
      <Contact></Contact>
      
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

