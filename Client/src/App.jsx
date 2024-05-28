
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Choose from './Pages/ChooseAHack/Choose';
import Form1 from './Pages/Form1/Form1';
import Form2 from './Pages/Form2/Form2';

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
