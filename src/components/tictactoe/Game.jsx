/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { calculateWinner } from '../../helpers'
import Board from './Board'
import './Game.css'

const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null))
  //   const [xIsNext, setXIsNext] = useState(true)

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  })

  const winner = calculateWinner(state.board)

  const handleClick = (index) => {
    const boardCopy = [...state.board]
    if (winner || boardCopy[index]) return
    boardCopy[index] = state.xIsNext ? 'X' : 'O'
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    })
  }

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className='game-winner'>Winner is {winner}</div>}

      <button className='game-reset' onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  )
}

export default Game
