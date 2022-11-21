import './App.css';
import Welcome, {WelcomeH2} from './welcome';

function App() {
  return (
    <div className="App">
      <Welcome  />
      <WelcomeH2 children = "Welcome children"/>
      <WelcomeH2>content dalam children</WelcomeH2>
    </div>
  );
}

export default App;
