import logo from './logo.svg';
import './App.css';
import data from './Compliment';

function App() {
  return (
    <div className="App">
      <h1>{data[Math.floor(Math.random * data.length)]}</h1>
    </div>
  );
}

export default App;
