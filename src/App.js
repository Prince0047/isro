import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Launchers from './components/launchers/Launchers';
import Quiz from './components/Quiz';
import About from './components/About';
import Missions from './components/missions/Missions';
import ContactForm from './components/contact/ContactForm';

import { toast } from 'react-toastify';

toast.configure();

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launchers' element={<Launchers />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/about' element={<About />} />
        <Route path='/missions' element={<Missions />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
