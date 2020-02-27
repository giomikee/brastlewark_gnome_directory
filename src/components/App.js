/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import '../css/App.css';
import BrastlewarkAPI from './BrastlewarkAPI';
import Header from './Header';

function App() {
	return (
		<div className="App">
			<Header />
			<BrastlewarkAPI />
		</div>
	);
}

export default App;
