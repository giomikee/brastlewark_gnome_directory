/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import Gnomes from '../components/Gnomes';

test('renders gnomes container in document', () => {
	const mockGnomes = [{ name: 'testgnome', id: 1 }];	// eslint-disable-line no-magic-numbers
	const { container } = render(<Gnomes gnomes={mockGnomes} />);
	const containerElement = container.querySelector('.gnomes_container');

	expect(containerElement).toBeInTheDocument();
});
