import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/About' element={<About/>}/>
      <Route path ='/Service' element={<Service/>}/>
      <Route path ='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;


