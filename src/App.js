import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Skill from './components/Skill';



function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Services />
      <Contact/>
    </div>
  );
}

export default App;
