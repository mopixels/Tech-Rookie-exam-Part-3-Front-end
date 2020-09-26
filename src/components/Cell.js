import React from 'react';
import arrow from './arrow.png';

const Cell = ({ cellValue }) => {
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
			{cellValue && <img style={arrowStyle} src={arrow} />}
		</td>
	);
};
export default Cell;
