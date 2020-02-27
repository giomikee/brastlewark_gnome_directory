/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import Gnome from '../components/Gnome';

test('renders a mocked gnome in document', () => {
	const mockGnome = { name: 'testgnome', id: 1 };	// eslint-disable-line no-magic-numbers
	const { getByText } = render(<Gnome gnome={mockGnome} />);
	const gnomeElement = getByText(new RegExp(mockGnome.name));

	expect(gnomeElement).toBeInTheDocument();
});
