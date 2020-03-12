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
		const { numberType } = this.props,
			rangeNames = {
				startRange: `${numberType}StartRange`,
				endRange: `${numberType}EndRange`
			};

		this.state = {
			numberType,
			selectedNumberFilterMethod: 'exact',
			[numberType]: '',
			rangeNames,
			[rangeNames.startRange]: '',
			[rangeNames.endRange]: ''
		};
	}

	setFilterMethod = event => {
		this.setState({
			selectedNumberFilterMethod: event.target.value
		});

	}

	handleChange = event => {
		const { name, value } = event.target,
			{ selectedNumberFilterMethod, rangeNames } = this.state,
			filterSetting = {
				[name]: value
			};

		this.setState({ [name]: value });


		if (Object.values(rangeNames).indexOf(name) >= 0) {
			filterSetting[rangeNames.startRange] = this.state[rangeNames.startRange];
			filterSetting[rangeNames.endRange] = this.state[rangeNames.endRange];
			filterSetting[name] = value;
		}

		if (selectedNumberFilterMethod === 'exact'
			|| (filterSetting[rangeNames.startRange].length > 0 && filterSetting[rangeNames.endRange].length > 0)
			|| (filterSetting[rangeNames.startRange].length === 0 && filterSetting[rangeNames.endRange].length === 0)) {
			this.props.onChange(filterSetting);
		}
	}

	render() {
		const { numberType, selectedNumberFilterMethod, rangeNames } = this.state;
		const formElements = selectedNumberFilterMethod === 'exact' ?
			<div>
				<label htmlFor={numberType}>Exact {numberType}: </label>
				<input type='number' name={numberType}
					pattern={noDecimalNumberPattern(numberType)} placeholder={`Specify an exact ${numberType}`}
					value={this.state[numberType]} onChange={this.handleChange} />
			</div>
			:
			<div>
				<div>
					<label htmlFor={this.state[rangeNames.startRange]}>{numberType} start range:</label>
					<input type='number' name={rangeNames.startRange}
						pattern={noDecimalNumberPattern(numberType)}
						placeholder={`Specify the ${numberType}'s start range`}
						value={this.state[rangeNames.startRange]} onChange={this.handleChange} required />
				</div>
				<div>
					<label htmlFor={this.state[rangeNames.endRange]}>{numberType} end range:</label>
					<input type='number' name={rangeNames.endRange}
						pattern={noDecimalNumberPattern(numberType)}
						placeholder={`Specify the ${numberType}'s end range`}
						value={this.state[rangeNames.endRange]} onChange={this.handleChange} required />
				</div>
			</div>;

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
						{formElements}
					</fieldset>
				</div>

			</div>
		);
	}
}
