import './App.scss';
import logo from './assets/github_logo.png'


function App() {
  return (
    <div className="app">
      <header className="link-create-room">
        <a className="createRoom" href="/newroom">+ Create Room</a>
      </header>

      <main className="main-home">
        <h1>Yakoot!</h1>
        <input type="text" placeholder="Game PIN" className="gamePin input"></input>
        <button type="submit" className="buttonEnter input">Enter</button>
      </main>

      <footer className="link-to-github">
        <a target="_blank" href="https:github.com/talis-fb/yakoot">
          <img src={logo}></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
