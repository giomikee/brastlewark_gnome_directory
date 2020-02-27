/*
 * Created on Wed Feb 26 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import Gnomes from './Gnomes';

const BRASTLEWARK_API_SRC = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export default class BrastlewarkAPI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			gnomes: []
		};
	}

	componentDidMount() {
		fetch(BRASTLEWARK_API_SRC)
			.then(res => res.json())
			.then(result => {
				this.setState({
					isLoaded: true,
					gnomes: result.Brastlewark
				});
			})
			.catch(error => {
				this.setState({
					isLoaded: true,
					error
				});
			});
	}

	render() {
		const { error, isLoaded, gnomes } = this.state;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading gnomes...</div>;
		}

		return (<Gnomes gnomes={gnomes} />);
	}
}
