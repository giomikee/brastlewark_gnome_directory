/*
* Created on Thu Feb 28 2020
* Author: Gio Justiniano
* More info: https://github.com/giomikee/
*
* Copyright (c) 2020
*/

import React from 'react';

export default class FilterString extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stringType: this.props.stringType,
			formElementsProperties: this.props.formElementsProperties
		};
	}

	render() {
		const { stringType, formElementsProperties } = this.state;

		return (
			<fieldset>
				<legend>{formElementsProperties.label}</legend>
				<input type="text" name={stringType} placeholder={formElementsProperties.placeholder} />
			</fieldset>
		);
	}


}
