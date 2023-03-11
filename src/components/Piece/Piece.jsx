import './Piece.css';

export function Piece(props) {
  const classes = `piece ${props.piece} square-${props.square}`;

  return(
    <div className={classes}></div>
  )
}