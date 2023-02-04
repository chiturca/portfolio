import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Experience from './containers/Experience';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
