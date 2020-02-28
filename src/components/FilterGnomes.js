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
	],
	STRING_FORM_ELEMENTS_PROPERTIES = {
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
				<h2>Filter Gnomes</h2>
				<form className='filter_gnomes__container' onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<FilterString stringType='name' formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.name} />
					<FilterNumber numberType='age' />
					<FilterNumber numberType='weight' />
					<FilterNumber numberType='height' />
					<FilterString stringType='professions'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.professions} />
					<FilterString stringType='hair_color'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.hairColor} />
					<FilterString stringType='friends'
						formElementsProperties={STRING_FORM_ELEMENTS_PROPERTIES.friends} />
					<input type='reset' value='Reset filters' className='form_buttons' />
					<input type='submit' value='Filter Gnomes' className='form_buttons' />
				</form>
			</div>
		);
	}
}
