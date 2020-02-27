/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders App in document', () => {
	const { container } = render(<App />);
	const app = container.querySelector('.App');

	expect(app).toBeInTheDocument();
});
