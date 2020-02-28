/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import FilterString from '../components/FilterString';

test('renders string filters for mocked string type', () => {
	const mockedStringType = 'mockedType';
	const mockedProperties = {
		[mockedStringType]: {
			label: 'mock label',
			placeholder: 'mock placeholder'
		}
	};
	const { getByPlaceholderText } = render(
		<FilterString stringType={mockedStringType} formElementsProperties={mockedProperties[mockedStringType]} />
	);
	const stringFilterElement = getByPlaceholderText(new RegExp(mockedProperties[mockedStringType].placeholder));

	expect(stringFilterElement).toBeInTheDocument();
});
