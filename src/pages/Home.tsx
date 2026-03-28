import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
