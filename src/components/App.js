import './App.css';
import logo from './github_logo.png'

function App() {
  return (
    <div className="app">
      <header>
        <a href="/newroom">+ Create Room</a>
      </header>

      <main>
        <h1>Yakoot!</h1>
        <input type="text" placeholder="Game PIN" className="gamePin input"></input>
        <button type="submit" className="buttonEnter input">Enter</button>
      </main>

      <footer>
        <a target="_blank" href="https:github.com/talis-fb/yakoot">
          <img src={logo}></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
