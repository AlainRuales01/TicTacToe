import { useState } from 'react'
import './App.css'
import './components/Card.tsx'
import Card from './components/Card.tsx'

function App() {
  const xLogo: string = 'https://th.bing.com/th/id/R.43767891c866488d9496046332d006ea?rik=vS1XUWAe37KdMg&riu=http%3a%2f%2fmarufrahman.com%2ftic-tac-toe%2fimg%2fcross.png&ehk=N9DejzzVHLkdYc%2bb6U1o0gYm0htihB9VfOop0DTCIio%3d&risl=&pid=ImgRaw&r=0'
  const oLogo: string = 'https://th.bing.com/th/id/R.5c4e45bf75099004bfc33b19d7b343ac?rik=4rew7gFBHC9Zhg&pid=ImgRaw&r=0'
  const defaultLogo: string = 'https://th.bing.com/th/id/R.df194987adc907b74e946aba9e40fc55?rik=RO%2b0XNnR2Hu2Bw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fquestion_mark%2fquestion_mark_PNG25.png&ehk=79SyWCAOrDKemjJc%2fe4OJTGtxMIS%2fpMt89bWr2zwC28%3d&risl=&pid=ImgRaw&r=0'
  
  const initialBoard = Array(9).fill("");
  const [turn, setTurn] = useState<boolean>(true);
  
  const [board, setBoard] = useState<Array<string>>(initialBoard);

  const handleClick = (index: number) => {
    if (checkWinner(board) || board[index]) return;
    
    const newBoard = board.slice();
    newBoard[index] = turn ? "X" : "O";
    setBoard(newBoard);
    setTurn(!turn);
    
  };
  
  const checkWinner = (board: Array<string>) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button className='bg-red-300' onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
        
//         <Card imageUrl={reactLogo} 
//               content='React logo' 
//               onClick={() => alert('React logo clicked')} 
//               className='default'/>

//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

  return (
    <div className='game-board'>
      {board.map((value, index) => (
        <Card
          key={index}
          imageUrl = {value === 'X'? xLogo : value === 'O' ? oLogo : defaultLogo}
          content={value}
          onClick={() => handleClick(index)}
          className={value}
        />
      ))}
    </div>
  )
}


export default App
