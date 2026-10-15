import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Loader from "./components/Loader";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import ScrollTop from "./components/ScrollTop";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <Loader />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <CursorGlow />
      <ScrollTop />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;