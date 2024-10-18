/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Cell from './Cell'
import { v4 as uuidv4 } from 'uuid'

const Board = (props) => {
  return (
    <div className='game-board'>
      {props.cells.map((item, index) => (
        <Cell
          key={uuidv4()}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
        ></Cell>
      ))}
    </div>
  )
}

export default Board
