import './App.css';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Manage from './pages/Manage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
