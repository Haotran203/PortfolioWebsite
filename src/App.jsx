import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Comment from './components/Comment';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Comment />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
