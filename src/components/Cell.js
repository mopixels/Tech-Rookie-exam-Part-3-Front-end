import React from 'react';
import arrow from './arrow.png';

const Cell = ({ idY, idX, currentPostition }) => {
	console.log(idY, idX);
	const cellStyle = {
		border: '1px solid',
		height: '1rem',
		width: '1rem',
	};
	const arrowStyle = {
		height: '1rem',
		width: '1rem',
	};
	return (
		<td className="cell" style={cellStyle}>
			{currentPostition === idY && <img style={arrowStyle} src={arrow} />}
		</td>
	);
};
export default Cell;
