// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here later like /about, /contact, etc. */}
      </Routes>
    </Layout>
  );
}

export default App;
