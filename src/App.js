import React, { useState } from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
	const [coordinateX, setCoordinateX] = useState(0);
	const [coordinateY, setCoordinateY] = useState(0);
	const [arrowPosition, setArrowPosition] = useState('right');

	const moveForward = () => {
		if (coordinateX === 9 && arrowPosition === 'right') {
			turnRight();
		} else if (coordinateX === 0 && arrowPosition === 'left') {
			turnRight();
		} else if (coordinateY === 9 && arrowPosition === 'down') {
			turnRight();
		} else if (coordinateY === 0 && arrowPosition === 'up') {
			turnRight();
		} else {
			if (arrowPosition === 'right') {
				setCoordinateX(coordinateX + 1);
			} else if (arrowPosition === 'down') {
				setCoordinateY(coordinateY + 1);
			} else if (arrowPosition === 'left') {
				setCoordinateX(coordinateX - 1);
			} else if (arrowPosition === 'up') {
				setCoordinateY(coordinateY - 1);
			}
		}
	};

	const turnRight = () => {
		if (arrowPosition === 'right') {
			setArrowPosition('down');
		} else if (arrowPosition === 'down') {
			setArrowPosition('left');
		} else if (arrowPosition === 'left') {
			setArrowPosition('up');
		} else {
			setArrowPosition('right');
		}
	};
	return (
		<div className="App">
			<div className="buttons">
				<button onClick={turnRight}>Turn right</button>
				<button onClick={moveForward}>Move forward</button>
			</div>

			<table>
				<tbody>
					{Array.from({ length: 10 }, (_, y) => (
						<tr id={y}>
							{Array.from({ length: 10 }, (_, x) => (
								<Cell
									x={x}
									y={y}
									coordinateX={coordinateX}
									coordinateY={coordinateY}
									arrowPosition={arrowPosition}
								/>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default App;
