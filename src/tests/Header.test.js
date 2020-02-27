/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders header title', () => {
	const { getByText } = render(<Header />);
	const headerElement = getByText(/Brastlewark Gnomes Directory/i);

	expect(headerElement).toBeInTheDocument();
});
