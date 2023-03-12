import "./Board.css";
import { Piece } from "../Piece/Piece";
import { INITIAL_BOARD_SETUP } from "../../constants/INITIAL_BOARD_SETUP";

export function Board() {
	return (
		<div className="layout">
			<div className="board-container">
				<div className="board">
					{INITIAL_BOARD_SETUP.map((piece) => (
						<Piece piece={piece.piece} square={piece.square} />
					))}
				</div>
			</div>
		</div>
	);
}
