import './Board.css';
import { Piece } from '../Piece/Piece';

export function Board() {
  return(
    <div className="layout">
      <div className="board-container">
        <div className="board">
          <Piece piece="br" square="a8" />
          <Piece piece="bn" square="b8" />
          <Piece piece="bb" square="c8" />
          <Piece piece="bq" square="d8" />
          <Piece piece="bk" square="e8" />
          <Piece piece="bb" square="f8" />
          <Piece piece="bn" square="g8" />
          <Piece piece="br" square="h8" />
          <Piece piece="bp" square="a7" />
          <Piece piece="bp" square="b7" />
          <Piece piece="bp" square="c7" />
          <Piece piece="bp" square="d7" />
          <Piece piece="bp" square="e7" />
          <Piece piece="bp" square="f7" />
          <Piece piece="bp" square="g7" />
          <Piece piece="bp" square="h7" />
          <Piece piece="wr" square="a1" />
          <Piece piece="wn" square="b1" />
          <Piece piece="wb" square="c1" />
          <Piece piece="wq" square="d1" />
          <Piece piece="wk" square="e1" />
          <Piece piece="wb" square="f1" />
          <Piece piece="wn" square="g1" />
          <Piece piece="wr" square="h1" />
          <Piece piece="wp" square="a2" />
          <Piece piece="wp" square="b2" />
          <Piece piece="wp" square="c2" />
          <Piece piece="wp" square="d2" />
          <Piece piece="wp" square="e2" />
          <Piece piece="wp" square="f2" />
          <Piece piece="wp" square="g2" />
          <Piece piece="wp" square="h2" />
        </div>
      </div>
    </div>
  )
}