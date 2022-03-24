import logo from './logo.svg';
import './App.css';
import Hello, { World } from './WelcomeText'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Silahkan edit disitu.
        </p>
        <p>
          Hello World! This is my First Single Page
        </p>
        <Hello />
        <World>Ngambil dari Closing Tag html (children)</World>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Bisa kita import gambar langsung tapi harus bener Path / slash nya */}
        <img src="/logo192.png" alt="React Logo" className='logoReact'/>
      </header>
    </div>
  );
}

export default App;
