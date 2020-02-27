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

const WANTED_FILTER_SETTINGS = [
	'name',
	'professions',
	'hair_color',
	'friends',
	'age',
	'ageStartRange',
	'ageEndRange',
	'weight',
	'weightStartRange',
	'weightEndRange',
	'height',
	'heightStartRange',
	'heightEndRange'
];

const getFilterSettings = form => {
	const validFilterSettings = {};

	[...form]
		.filter(field => WANTED_FILTER_SETTINGS.indexOf(field.name) >= 0)
		.filter(field => field.value.length > 0)
		.forEach(field => (validFilterSettings[field.name] = field.value.trim()));

	return validFilterSettings;
};

export default class FilterGnomes extends React.Component {

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(getFilterSettings(event.target));
	}
	handleReset = event => {
		this.props.onSubmit({});
	}

	render() {
		return (
			<div className='bordered_box filter_gnomes'>
				<form className='filter_gnomes__container' onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<input type="reset" value="Reset filters" />
					<fieldset>
						<legend>Filter by gnome name: </legend>
						<input type="text" name='name' placeholder="Type a gnome's name" />
					</fieldset>
					<FilterNumber numberType='age' />
					<FilterNumber numberType='weight' />
					<FilterNumber numberType='height' />
					<fieldset>
						<legend>Profession: </legend>
						<input type="text" name='professions' placeholder="Type a gnome's profession" />
					</fieldset>
					<fieldset>
						<legend>Hair color: </legend>
						<input type="text" name='hair_color' placeholder="Type a gnome's hair color" />
					</fieldset>
					<fieldset>
						<legend>Friends with: </legend>
						<input type="text" name='friends' placeholder="Type the name of a gnome's possible friend" />
					</fieldset>
					<button type='submit'>Filter Gnomes</button>
				</form>
			</div>
		);
	}
}
