import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import ProjectDisplay from './containers/ProjectDisplay';
import Experience from './containers/Experience';
import Footer from './components/Footer';
import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
