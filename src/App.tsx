import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import ProjectDisplay from './containers/ProjectDisplay';
import Experience from './containers/Experience';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
