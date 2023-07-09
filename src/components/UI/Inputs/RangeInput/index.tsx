import React, { useState } from 'react';
import './rangeInput.Module.scss'
type IProps = {
	inputRange: string
	setInputRange: React.Dispatch<React.SetStateAction<string>>
}
const RangeInput = ({inputRange, setInputRange}:IProps) => {
	
	return (
		<>
			<input
				value={inputRange}
				onChange={event => setInputRange(event.target.value)}
				className='range-input'
				min='1'
				max='3485'
				type='range'
			/>
			<span className='ranget-text'>Ціна від:</span>
			<input
				value={inputRange}
				onChange={e => setInputRange(e.target.value)}
				type='number'
				className='range-text'
			/>
		</>
	)
};

export default RangeInput;