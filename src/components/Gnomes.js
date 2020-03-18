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
import NavigationButton from './NavigationButton';
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

const handleFilter = (filterSettings, field, visibleGnomes) => {
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
};

export default class Gnomes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gnomes: this.props.gnomes,
			visibleGnomes: this.props.gnomes,
			sliceArguments: [0, 10]
		};
	}

	filterGnomes = filterSettings => {
		const { gnomes } = this.state;
		let visibleGnomes = gnomes;

		FILTER_ORDER.filter(field => filterSettings[field])
			.forEach(field => {
				visibleGnomes = handleFilter(filterSettings, field, visibleGnomes);
			});

		this.setState({ visibleGnomes });
	}

	groupVisibleGnomes = event => {
		const button = event.target.value;
		let sliceArguments;

		if (button === 'first') {
			sliceArguments = [0, 10];
		} else if (button === 'last') {
			const { visibleGnomes } = this.state;

			sliceArguments = [
				visibleGnomes.length - 10,
				visibleGnomes.length
			];
		} else {
			const modifySlice = event.target.value === 'next' ? 10 : -10;

			sliceArguments = this.state.sliceArguments.map(arg => arg + modifySlice);
			sliceArguments[0] = sliceArguments[0] < 0 ? 0 : sliceArguments[0];
			sliceArguments[1] = sliceArguments[1] < 10 ? 10 : sliceArguments[1];
		}

		this.setState({ sliceArguments });
	}

	render() {
		const { visibleGnomes, sliceArguments } = this.state,
			arePreviousButtonsDisabled = sliceArguments[0] === 0,
			areNextButtonsDisabled = sliceArguments[1] >= visibleGnomes.length;

		return (
			<div>
				<FilterGnomes onChange={this.filterGnomes} />
				{/* <button value='first'
					onClick={this.groupVisibleGnomes}
					disabled={sliceArguments[0] === 0}>
						First 10
				</button> */}
				<NavigationButton
					value='first'
					onClick={this.groupVisibleGnomes}
					isDisabled={arePreviousButtonsDisabled}>
						First 10
				</NavigationButton>
				<NavigationButton
					value='previous'
					onClick={this.groupVisibleGnomes}
					isDisabled={arePreviousButtonsDisabled}>
						Previous 10
				</NavigationButton>
				<NavigationButton
					value='next'
					onClick={this.groupVisibleGnomes}
					isDisabled={areNextButtonsDisabled}>
						Next 10
				</NavigationButton>
				<NavigationButton
					value='last'
					onClick={this.groupVisibleGnomes}
					isDisabled={areNextButtonsDisabled}>
						Last 10
				</NavigationButton>
				<div className="gnomes_container">
					{visibleGnomes.slice(...sliceArguments).map(gnome => <Gnome gnome={gnome} key={gnome.id} />)}
				</div>
			</div>
		);
	}
}
