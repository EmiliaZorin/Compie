import React, { useState } from 'react';
import playerOne from '../../assets/player1.png';
import playerTwo from '../../assets/player2.png';

export default function Player() {
  const [image, setImage] = useState();
  const players = [];

  return <div>{players}</div>;
}
