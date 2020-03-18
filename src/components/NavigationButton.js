/*
 * Created on Wed Mar 18 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';

export default function NavigationButton({ value, onClick, isDisabled, children }) {
	return (
		<button
			value={value}
			onClick={onClick}
			disabled={isDisabled}>
			{children}
		</button>
	);
}
