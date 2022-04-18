import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import BlogList from "./BlogList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path="/create" element={<Create/>}/>
            <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
          </Routes>
  
        </div>
      </div>
    </Router>
  );
}

export default App;
