import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menubar from './Components/Menubar';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Skills" element={<Skills/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
