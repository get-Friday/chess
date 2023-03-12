import "./styles.css";
import { Piece } from "../Piece";
import { INITIAL_BOARD_SETUP } from "../../constants/INITIAL_BOARD_SETUP";
import { useEffect, useState } from "react";

export function Board() {
	const [windowMousePosition, setWindowMousePosition] = useState({});
	const [boardMousePosition, setBoardMousePosition] = useState({});

	const handleMouseMove = (event) => {
		const boardX = event.clientX - event.target.parentNode.parentNode.offsetLeft;
		const boardY = event.clientY - event.target.parentNode.parentNode.offsetTop;

    // Its position to translate should be 12.5%
    // squareColumn = boardX * 12.5 / 100

		setBoardMousePosition({ x: boardX, y: boardY });
	};

	useEffect(() => {
		const handleMouseMove = (event) => {
			setWindowMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="layout">
			<div className="board-container">
				<div style={{'color': 'white'}} className="test">
					Board mouse position
					<b>
						({Math.floor(boardMousePosition.x * 12.5 / 100)}, {Math.floor(boardMousePosition.y * 12.5 / 100)})
					</b>
				</div>
				<div className="board" onMouseMove={handleMouseMove}>
					{INITIAL_BOARD_SETUP.map((piece, index) => (
						<Piece piece={piece.piece} square={piece.square} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
