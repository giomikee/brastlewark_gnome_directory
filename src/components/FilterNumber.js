/*
* Created on Thu Feb 27 2020
* Author: Gio Justiniano
* More info: https://github.com/giomikee/
*
* Copyright (c) 2020
*/

import React from 'react';

const AGE = 'age';

const noDecimalNumberPattern = numberType => numberType === AGE ? '[0-9]*' : '';

export default class FilterNumber extends React.Component {
	constructor(props) {
		super(props);
		const { numberType } = this.props;

		this.state = {
			numberType,
			selectedNumberFilterMethod: 'exact',
			numberFilterMethods: {
				exact: <div>
					<label htmlFor={numberType}>Exact {numberType}: </label>
					<input type='number' name={numberType}
						pattern={noDecimalNumberPattern(numberType)} placeholder={`Specify an exact ${numberType}`} />
				</div>,

				range: <div>
					<div>
						<label htmlFor={`${numberType}StartRange`}>{numberType} start range: </label>
						<input type='number' name={`${numberType}StartRange`}
							pattern={noDecimalNumberPattern(numberType)}
							placeholder={`Specify the ${numberType}'s start range`} required />
					</div>
					<div>
						<label htmlFor={`${numberType}EndRange`}>{numberType} end range: </label>
						<input type='number' name={`${numberType}EndRange`}
							pattern={noDecimalNumberPattern(numberType)}
							placeholder={`Specify the ${numberType}'s end range`} required/>
					</div>
				</div>
			}
		};
	}

setFilterMethod = event => {
	this.setState({
		selectedNumberFilterMethod: event.target.value
	});

}

render() {
	const { numberType, numberFilterMethods, selectedNumberFilterMethod } = this.state;

	return (
		<div>
			<div className='filter-number'>
				<fieldset>
					<legend>{numberType} filter type:</legend>
					<select name={`${numberType}SelectedNumberFilterMethod`}
						value={selectedNumberFilterMethod} onChange={this.setFilterMethod}>
						<option value='exact'>Exact</option>
						<option value='range'>Range</option>
					</select>
					{numberFilterMethods[selectedNumberFilterMethod]}
				</fieldset>
			</div>

		</div>
	);
}


}
