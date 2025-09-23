import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Ventures from './pages/Ventures';
import Contact from './pages/Contact';
import Lokio from './pages/Lokio';
import FreshFlow from './pages/FreshFlow';
import RiseMAgile from './pages/RiseMAgile';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/ventures/lokio" element={<Lokio />} />
            <Route path="/ventures/fresh-flow" element={<FreshFlow />} />
            <Route path="/ventures/rise-magile" element={<RiseMAgile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
