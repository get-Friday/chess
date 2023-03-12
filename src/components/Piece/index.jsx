import { useRef } from 'react';
import './styles.css';

export function Piece(props) {
  const dragPiece = useRef();
  const classes = `piece ${props.piece} square-${props.square}`;

  const handleDragStart = (event) => {
    event.preventDefault();
  }

  return(
    <div className={classes} onDragStart={handleDragStart}/>
  )
}