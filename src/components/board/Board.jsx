import './Board.css';
import { Piece } from '../Piece/Piece';

export function Board() {
  return(
    <div className="layout">
      <div className="board-container">
        <div className="board">
          <Piece Piece="br" Square="a8" />
          <Piece Piece="bn" Square="b8" />
          <Piece Piece="bb" Square="c8" />
          <Piece Piece="bq" Square="d8" />
          <Piece Piece="bk" Square="e8" />
          <Piece Piece="bb" Square="f8" />
          <Piece Piece="bn" Square="g8" />
          <Piece Piece="br" Square="h8" />
          <Piece Piece="bp" Square="a7" />
          <Piece Piece="bp" Square="b7" />
          <Piece Piece="bp" Square="c7" />
          <Piece Piece="bp" Square="d7" />
          <Piece Piece="bp" Square="e7" />
          <Piece Piece="bp" Square="f7" />
          <Piece Piece="bp" Square="g7" />
          <Piece Piece="bp" Square="h7" />
          <Piece Piece="wr" Square="a1" />
          <Piece Piece="wn" Square="b1" />
          <Piece Piece="wb" Square="c1" />
          <Piece Piece="wq" Square="d1" />
          <Piece Piece="wk" Square="e1" />
          <Piece Piece="wb" Square="f1" />
          <Piece Piece="wn" Square="g1" />
          <Piece Piece="wr" Square="h1" />
          <Piece Piece="wp" Square="a2" />
          <Piece Piece="wp" Square="b2" />
          <Piece Piece="wp" Square="c2" />
          <Piece Piece="wp" Square="d2" />
          <Piece Piece="wp" Square="e2" />
          <Piece Piece="wp" Square="f2" />
          <Piece Piece="wp" Square="g2" />
          <Piece Piece="wp" Square="h2" />
        </div>
      </div>
    </div>
  )
}