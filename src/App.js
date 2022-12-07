import './App.css';
import Welcome, {WelcomeH2} from './welcome';
import Button from './Button';
import Home from './Home';
import About from './About';
import Tdl from './Todo';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tdl">To do List</Link>
      </nav>
      <Welcome  />
      <WelcomeH2 children = "Welcome children"/>
      <WelcomeH2>content dalam children</WelcomeH2>
      <Button>click me</Button>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="tdl" element={<Tdl />}/>
      </Routes>
    </div>
  );  
}
export default App;
