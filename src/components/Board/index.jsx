import "./styles.css";
import { Piece } from "../Piece";
import { INITIAL_BOARD_SETUP } from "../../constants/INITIAL_BOARD_SETUP";

export function Board() {
	return (
		<div className="layout">
			<div className="board-container">
				<div className="board">
					{INITIAL_BOARD_SETUP.map((piece, index) => (
						<Piece piece={piece.piece} square={piece.square} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
