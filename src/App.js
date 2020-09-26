import React, { useState } from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
	const [currentPostition, setCurrentPosition] = useState(0);

	const moveForward = () => {
		setCurrentPosition(currentPostition + 1);
	};
	const turnRight = () => {};
	return (
		<div>
			<button onClick={turnRight}>Turn right</button>
			<button onClick={moveForward}>Move forward</button>

			<table>
				<tbody>
					{Array.from({ length: 10 }, (_, x) => (
						<tr id={x}>
							{Array.from({ length: 10 }, (_, y) => (
								<Cell idY={y} idX={x} currentPostition={currentPostition} />
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default App;
