import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Regdet from './Components/Regdet'
import Licdet from './Components/Licdet';
import Perdet from './Components/Perdet';
import Footer from './Components/Footer';
import Newreg from './Components/Newreg';
import Newlic from './Components/Newlic';
import Newper from './Components/Newper';
import About from './Components/About';

function App() {
  return (
    <>
      {/* <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Regdet' element={<Regdet/>}></Route>
      <Route path='Licdet' element={<Licdet/>}></Route>
      <Route path='Perdet' element={<Perdet/>}></Route>
      <Route path='Newreg' element={<Newreg/>}></Route>
      <Route path='Newlic' element={<Newlic/>}></Route>
      <Route path='Newper' element={<Newper/>}></Route>
      <Route path='About' element={<About/>}></Route>
      </Routes>
      <Footer/> */}
      

    </>
  );
}

export default App;

