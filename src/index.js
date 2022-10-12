import _ from 'lodash';

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['ting', 'GG bruhhhh ano ba'], ' ');

	return element;
}

document.body.appendChild(component());
