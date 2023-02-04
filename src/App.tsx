import { Routes, Route } from 'react-router-dom';
import About from './containers/About';
import Experience from './containers/Experience';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
