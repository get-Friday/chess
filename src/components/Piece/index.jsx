import './styles.css';

export function Piece(props) {
  const classes = `piece ${props.piece} square-${props.square}`;

  const handleDrag = () => {
    console.log('call');
  }

  return(
    <div className={classes} onDrag={handleDrag} />
  )
}