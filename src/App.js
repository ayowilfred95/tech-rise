
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Apply from './pages/Apply';
import Contact  from './pages/Contact';
import News from './pages/News';
import About from './pages/About';
import Events from './pages/Events';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path ="/" element= {<Homepage />} />
    <Route path="/about" element={<About />}/> 
    <Route path ="/apply" element= {<Apply />} />
    <Route path="/contact" element={<Contact />}/> 
    <Route path="/news" element={<News />}/> 
    <Route path="/events" element={<Events />}/>         
  </Routes>
  </BrowserRouter> 
  );
}

export default App;
