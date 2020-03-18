/*
 * Created on Wed Mar 18 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import NavigationButton from '../components/NavigationButton';

test('renders navigation button', () => {
	const buttonText = 'mock button';
	const { getByText } = render(
		<NavigationButton
			value={buttonText}
			onClick={() => {}}
			isDisabled={false}
		>
			{buttonText}
		</NavigationButton>
	);
	const button = getByText(new RegExp(buttonText));

	expect(button).toBeInTheDocument();
});
