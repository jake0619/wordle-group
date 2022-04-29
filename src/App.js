import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    // <div className="App">
    //   <div class="title-container">         
    //     <header>
    //         <h1 class="title">WORDLE</h1>
    //     </header>
    //   </div>
    //   <Board/>
    // </div>

    <body>

    <div class="game-container">

    <div class="title-container">         
        <header>
            <h1 class="title">WORDLE</h1>
        </header>
    </div>

            <Board/>
    </div>   
  </body>
  );
}

export default App;
