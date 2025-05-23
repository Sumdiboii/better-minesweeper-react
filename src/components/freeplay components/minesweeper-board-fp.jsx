import React, { useState, useEffect } from 'react';
import './minesweeper-board-fp.css';

// Board settings (can be made dynamic later)
const ROWS = 9;
const COLS = 9;
const MINES = 10;

function createEmptyBoard(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      revealed: false,
      flagged: false,
      mine: false,
      adjacent: 0,
    }))
  );
}

function placeMines(board, mines) {
  let placed = 0;
  const rows = board.length;
  const cols = board[0].length;
  while (placed < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      placed++;
    }
  }
}

function calculateAdjacents(board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].mine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) count++;
        }
      }
      board[r][c].adjacent = count;
    }
  }
}

function revealCell(board, r, c) {
  if (board[r][c].revealed || board[r][c].flagged) return;
  board[r][c].revealed = true;
  if (board[r][c].adjacent === 0 && !board[r][c].mine) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr, nc = c + dc;
        if (
          nr >= 0 && nr < board.length &&
          nc >= 0 && nc < board[0].length &&
          !board[nr][nc].revealed &&
          !board[nr][nc].mine
        ) {
          revealCell(board, nr, nc);
        }
      }
    }
  }
}

const MinesweeperBoardFP = ({ onFirstClick, gameReset, onGameOver }) => {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    const newBoard = createEmptyBoard(ROWS, COLS);
    placeMines(newBoard, MINES);
    calculateAdjacents(newBoard);
    setBoard(newBoard);
    setGameOver(false);
    setWin(false);
    setFirstClick(false);
  }, [gameReset]);

  useEffect(() => {
    if ((gameOver || win) && onGameOver) {
      onGameOver();
    }
  }, [gameOver, win, onGameOver]);

  const handleCellClick = (r, c) => {
    if (gameOver || win) return;
    if (board[r][c].flagged) return;
    if (!firstClick) {
      setFirstClick(true);
      if (onFirstClick) onFirstClick();
    }
    if (board[r][c].mine) {
      setGameOver(true);
      const revealAll = board.map(row => row.map(cell => ({ ...cell, revealed: true })));
      setBoard(revealAll);
      return;
    }
    const newBoard = board.map(row => row.map(cell => ({ ...cell })));
    revealCell(newBoard, r, c);
    setBoard(newBoard);
    // Check win
    const allSafeRevealed = newBoard.flat().filter(cell => !cell.mine).every(cell => cell.revealed);
    if (allSafeRevealed) setWin(true);
  };

  const handleRightClick = (e, r, c) => {
    e.preventDefault();
    if (gameOver || win) return;
    const newBoard = board.map(row => row.map(cell => ({ ...cell })));
    newBoard[r][c].flagged = !newBoard[r][c].flagged;
    setBoard(newBoard);
  };

  return (
    <div className="minesweeper-board-fp">
      {gameOver && <div className="game-status">Game Over!</div>}
      {win && <div className="game-status">You Win!</div>}
      <div className="board-grid">
        {board.map((row, r) => (
          <div className="board-row" key={r}>
            {row.map((cell, c) => (
              <div
                className={`cell${cell.revealed ? ' revealed' : ''}${cell.flagged ? ' flagged' : ''}`}
                key={c}
                onClick={() => handleCellClick(r, c)}
                onContextMenu={e => handleRightClick(e, r, c)}
              >
                {cell.revealed && cell.mine && '💣'}
                {cell.revealed && !cell.mine && cell.adjacent > 0 && cell.adjacent}
                {!cell.revealed && cell.flagged && '🚩'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinesweeperBoardFP;
