import React from 'react';
import arrow from './arrow.png';

const Cell = ({ y, x, coordinateX, coordinateY, arrowPosition }) => {
	const cellCoordinates = [x, y].toString();
	const currentLocation = [coordinateX, coordinateY].toString();

	if (cellCoordinates === currentLocation) {
		console.log('the one');
		console.log(cellCoordinates, currentLocation);
	}
	const cellStyle = {
		border: '1px solid',
		height: '1.5rem',
		width: '1.5rem',
	};
	console.log(arrowPosition);

	return (
		<td className="cell" style={cellStyle}>
			{currentLocation === cellCoordinates && (
				<img className={arrowPosition} src={arrow} />
			)}
		</td>
	);
};
export default Cell;
