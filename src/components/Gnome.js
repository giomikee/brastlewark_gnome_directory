/*
 * Created on Thu Feb 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

/* eslint-disable no-magic-numbers */
import React from 'react';
import '../css/Gnome.css';

const KEY_TRANSLATOR = {
		hair_color: 'Hair color' // eslint-disable-line camelcase
	},
	INFOS_NOT_TO_ITERATE = ['id', 'name', 'thumbnail'];

const renderGnomeDetailList = detailArray => {
	const items = [];

	detailArray.forEach(item => items.push(
		<li key={detailArray.indexOf(item)}>
			{item}
		</li>)
	);

	return (
		<ul className='gnome__detail-list'>
			{items}
		</ul>
	);
};

const autoRenderGnomeDetails = gnome => {
	const gnomeInfos = Object.keys(gnome),
		gnomeDetails = [];

	gnomeInfos.forEach(info => {
		const isValidGnomeInfo = INFOS_NOT_TO_ITERATE.indexOf(info) === -1
            && gnome[info] && gnome[info].toString().length > 0;

		if (isValidGnomeInfo) {
			const gnomeDetail = <div key={`${gnome.id}${gnomeInfos.indexOf(info)}`}>
				<span className='gnome__detail'>{KEY_TRANSLATOR[info] ? KEY_TRANSLATOR[info] : info} - </span>
				{Array.isArray(gnome[info]) ? renderGnomeDetailList(gnome[info]) : gnome[info]}
			</div>;

			gnomeDetails.push(gnomeDetail);
		}
	});

	return gnomeDetails;
};

const Gnome = ({ gnome }) => (
	<div className="gnome bordered_box">
		<img src={gnome.thumbnail} className="thumbnail" alt="thumbnail" />
		<h2 className="gnome__name">{gnome.name}</h2>
		<div className="gnome__other-details">{autoRenderGnomeDetails(gnome)}</div>
	</div>
);

export default Gnome;
