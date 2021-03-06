/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import FilterGnomes from '../components/FilterGnomes';

test('renders Gnome filter tool in document', () => {
	const { getAllByText } = render(<FilterGnomes />);
	const gnomesFilter = getAllByText(/Filter Gnomes/);

	expect(gnomesFilter.length).toBeGreaterThan(0);
});
