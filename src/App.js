import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBoard } from './utils/createBoard';

function App() {
  const [board, setBoard] = React.useState(()=>createBoard());
  return (
    <div className="App">
      {board.map((row, rowIdx) => (
        <div key={rowIdx}> 
          {row.map((letter, letterIdx) => (
            <div key={letterIdx}> Cell </div>
        ))} 
        </div>
      ))}
    </div>
  );
}

export default App;
