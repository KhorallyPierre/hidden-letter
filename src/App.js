import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from "./utils/Cell"
import { createBoard } from './utils/createBoard';

function App() {
  const [board, setBoard] = React.useState(() => createBoard());
  const [gamesToWin, setGamesToWin] = React.useState(6);

  function handleClick(row, col) {
    if (board[row][col].isHidden) {
      setGamesToWin(gamesToWin - 1);

      setTimeout(() => {
        setBoard(createBoard());
      }, 500);
    }
  }
  return (
    <div className="App">
      <h1> Find the Hidden Letter</h1>
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className={'row'}>
          {row.map((letter, letterIdx) => (
            <Cell key={letterIdx} handleClick={handleClick} {...letter}> Cell </Cell>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
