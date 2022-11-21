import './App.css';
import Welcome, {WelcomeH2} from './welcome';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Welcome  />
      <WelcomeH2 children = "Welcome children"/>
      <WelcomeH2>content dalam children</WelcomeH2>
      <Button>click me</Button>
    </div>
  );
}

export default App;
