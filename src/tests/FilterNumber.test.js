/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import FilterNumber from '../components/FilterNumber';

test('renders number filters for mocked number type', () => {
	const mockedNumberType = 'mockedType';
	const { getByPlaceholderText } = render(<FilterNumber numberType={mockedNumberType}/>);
	const numberFilterElements = getByPlaceholderText(new RegExp(mockedNumberType));

	expect(numberFilterElements).toBeInTheDocument();
});
