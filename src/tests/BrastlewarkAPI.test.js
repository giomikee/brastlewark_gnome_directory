/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import BrastlewarkAPI from '../components/BrastlewarkAPI';

test('fetch is loading without errors', () => {
	const { getByText } = render(<BrastlewarkAPI />);
	const loadingGnomes = /Loading gnomes/i;
	const loadingGnomesElement = getByText(loadingGnomes);

	expect(loadingGnomesElement).toBeInTheDocument();
});
