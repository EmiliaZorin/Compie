import './Tile.css';
import Player from '../Player/Player';

export default function Tile({ number }) {
  if (number % 2 === 0) {
    return (
      <div className="tile whiteTile">
        <Player />
      </div>
    );
  } else {
    return (
      <div className="tile blackTile">
        <Player />
      </div>
    );
  }
}
