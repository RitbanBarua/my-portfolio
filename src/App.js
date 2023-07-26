import './App.css';
import CustomMouseTrail from './components/CustomMouseTrail';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Marks from './components/Marks';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GoToTopButton from './components/GoToTopButton';

function App() {

  const revealFn = ()=>{
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((e)=>{
      const windowHeight = window.innerHeight;
      const revealTop = e.getBoundingClientRect().top;
      const revealPoint = 150;

      if(revealTop < windowHeight - revealPoint){
        e.classList.add("active");
      }
      else{
        e.classList.remove("active");
      }
    })
  }

  window.addEventListener("scroll", revealFn);
  

  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Marks />
        <Projects />
        <ContactPage />
        <Footer />
        <GoToTopButton />
        <CustomMouseTrail />
      </div >
    </>
  );
}

export default App;
