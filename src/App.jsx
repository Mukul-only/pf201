import Navbar from "./components/Navbar";
import SplashCursor from "./components/Cursor/SplashCursor";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import WorkExperience from "./components/WorkExperience";
import Stack from "./components/Stack";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="ambient-glow"></div>
      <Navbar />
      <SplashCursor
        CURL={6}
        SPLAT_RADIUS={0.12}
        COLOR_UPDATE_SPEED={7}
        RAINBOW_MODE
        DENSITY_DISSIPATION={6}
        VELOCITY_DISSIPATION={2}
      />
      <Hero />
      <Marquee />
      <About />
      <div className="section-divider"></div>
      <Services />
      <div className="section-divider"></div>
      <CaseStudy />
      <div className="section-divider"></div>
      <WorkExperience />
      <div className="section-divider"></div>
      <Stack />
      <div className="section-divider"></div>
      <TrustedBy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
