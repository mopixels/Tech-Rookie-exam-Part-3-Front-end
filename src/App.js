import React, { useState } from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
	const [cellValue, setCellValue] = useState();

	const moveForward = () => {
		setCellValue(true);
	};
	const turnRight = () => {};
	return (
		<div>
			<button onClick={turnRight}>Turn right</button>
			<button onClick={moveForward}>Move forward</button>

			<table>
				<tbody>
					{Array.from({ length: 10 }, (_) => (
						<tr>
							{Array.from({ length: 10 }, (_) => (
								<Cell cellValue={cellValue} />
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default App;
