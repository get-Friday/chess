import './Piece.css';

export function Piece(props) {
  const classes = `piece ${props.Piece} square-${props.Square}`;

  return(
    <div className={classes}></div>
  )
}