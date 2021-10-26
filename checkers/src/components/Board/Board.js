import React from 'react';
import './Board.css';
import Tile from '../Tile/Tile';

const tiles = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Board() {
  let board = [];

  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; j < tiles.length; j++) {
      const number = j + i + 2;
      let image = undefined;

      board.push(<Tile number={number} />);
    }
  }

  return <div className="checkersBoard">{board}</div>;
}
