import logo from './logo.svg';
import './App.css';
// Los componentes que se importan de manera default van sin llave, los que se exportan normal entre llaves
import HolaMundo, { AdiosMundo2 } from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <HolaMundo />
       <AdiosMundo />
       <AdiosMundo2 />
      </header>
    </div>
  );
}

export default App;