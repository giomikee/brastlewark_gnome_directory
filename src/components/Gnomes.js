/*
 * Created on Wed Feb 26 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

/* eslint-disable no-magic-numbers */
import React from 'react';
import FilterGnomes from './FilterGnomes';
import Gnome from './Gnome';
import '../css/Gnomes.css';

const STRINGS = [
		'name',
		'hair_color'
	],
	WHOLE_NUMBERS = [
		'age',
		'ageStartRange',
		'ageEndRange'
	],
	NUMBERS = [
		...WHOLE_NUMBERS,
		'weight',
		'weightStartRange',
		'weightEndRange',
		'height',
		'heightStartRange',
		'heightEndRange'
	],
	STRING_ARRAYS = [
		'professions',
		'friends'
	],
	FILTER_ORDER = [
		'name',
		...NUMBERS,
		'hair_color',
		...STRING_ARRAYS
	],
	IGNORE_END_RANGES = [
		'ageEndRange',
		'weightEndRange',
		'heightEndRange'
	];

const parseNumber = (field, numberString) =>
	WHOLE_NUMBERS.indexOf(field) >= 0 ? parseInt(numberString, 10) : parseFloat(numberString);

const stringContainsPhrase =
	(string, phraseToCheck) => string.trim().toLowerCase().indexOf(phraseToCheck.toLowerCase()) >= 0;

export default class Gnomes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gnomes: this.props.gnomes,
			visibleGnomes: this.props.gnomes
		};
	}

	handleFilter = (filterSettings, field, visibleGnomes) => {
		const numbersFilterIndex = NUMBERS.indexOf(field);
		let filteredVisibleGnomes = visibleGnomes;

		if (STRINGS.indexOf(field) >= 0) {
			filteredVisibleGnomes = visibleGnomes.filter(
				gnome => stringContainsPhrase(gnome[field], filterSettings[field])
			);
		} else if (numbersFilterIndex >= 0 && IGNORE_END_RANGES.indexOf(field) === -1) {
			if (field.indexOf('Range') >= 0) {
				const startRange = parseNumber(field, filterSettings[field]);
				const endRangeField = NUMBERS[numbersFilterIndex + 1];
				const endRange = parseNumber(endRangeField, filterSettings[endRangeField]);
				const fieldToRangeCompare = field.split('Start')[0];

				filteredVisibleGnomes =
					visibleGnomes.filter(gnome =>
						gnome[fieldToRangeCompare] >= startRange && gnome[fieldToRangeCompare] <= endRange
					);
			} else {
				filteredVisibleGnomes =
					visibleGnomes.filter(gnome => gnome[field] === parseNumber(field, filterSettings[field]));
			}
		} else if (STRING_ARRAYS.indexOf(field) >= 0) {
			filteredVisibleGnomes = visibleGnomes.filter(gnome => {
				const filteredGnomeData =
					gnome[field].filter(gnomeData => stringContainsPhrase(gnomeData, filterSettings[field]));

				return filteredGnomeData.length > 0;
			});
		}

		return filteredVisibleGnomes;
	}

	filterGnomes = filterSettings => {
		const { gnomes } = this.state;
		let visibleGnomes = gnomes;

		FILTER_ORDER.filter(field => filterSettings[field])
			.forEach(field => {
				visibleGnomes = this.handleFilter(filterSettings, field, visibleGnomes);
			});

		this.setState({ visibleGnomes });
	}

	render() {
		const { visibleGnomes } = this.state;

		return (
			<div>
				<FilterGnomes onSubmit={this.filterGnomes} />
				<div className="gnomes_container">
					{visibleGnomes.map(gnome => <Gnome gnome={gnome} key={gnome.id} />)}
				</div>
			</div>
		);
	}
}
