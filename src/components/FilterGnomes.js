/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import '../css/FilterGnomes.css';
import FilterNumber from './FilterNumber';
import FilterString from './FilterString';

const STRING_FORM_ELEMENTS_PROPERTIES = {
	name: {
		label: 'Filter by gnome name:',
		placeholder: 'Type a gnome\'s name'
	},
	professions: {
		label: 'Profession:',
		placeholder: 'Type a gnome\'s profession'
	},
	hairColor: {
		label: 'Hair color:',
		placeholder: 'Type a gnome\'s hair color'
	},
	friends: {
		label: 'Friends with:',
		placeholder: 'Type the name of a gnome\'s possible friend'
	}
};

const getValidFilterSettings = filterSettings => {
	const validFilterSettings = filterSettings;

	Object.keys(validFilterSettings)
		.forEach(filterType => validFilterSettings[filterType].length === 0 && delete validFilterSettings[filterType]);

	return validFilterSettings;
};

export default class FilterGnomes extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			filterSettings: {
				name: '',
				professions: '',
				hair_color: '',	// eslint-disable-line camelcase
				friends: '',
				age: '',
				ageStartRange: '',
				ageEndRange: '',
				weight: '',
				weightStartRange: '',
				weightEndRange: '',
				height: '',
				heightStartRange: '',
				heightEndRange: ''
			}
		};
	}

	handleChange = newFilterSettings => {
		const filterSettings = Object.assign({}, this.state.filterSettings, newFilterSettings);

		this.setState({ filterSettings });
		this.props.onChange(getValidFilterSettings(filterSettings));
	}

	handleReset = () => this.props.onChange({});

	render() {
		return (
			<div className='bordered_box filter_gnomes'>
				<h2>Filter Gnomes</h2>
				<form className='filter_gnomes__container' onReset={this.handleReset}>
					<FilterString stringType='name'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.name} onChange={this.handleChange} />
					<FilterNumber numberType='age' onChange={this.handleChange} />
					<FilterNumber numberType='weight' onChange={this.handleChange} />
					<FilterNumber numberType='height' onChange={this.handleChange} />
					<FilterString stringType='professions'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.professions}
						onChange={this.handleChange} />
					<FilterString stringType='hair_color'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.hairColor}
						onChange={this.handleChange} />
					<FilterString stringType='friends'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.friends}
						onChange={this.handleChange} />
					<input type='reset' value='Reset filters' className='form_buttons' />
				</form>
			</div>
		);
	}
}
