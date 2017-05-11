(function () {
	'use strict';

	const ACTIONS = {
			INC: Symbol('ACTION_INC'),
			DEC: Symbol('ACTION_DEC')
		},
		store = Redux.createStore(reducer);

	document.getElementById('inc')
		.addEventListener('click', function () {
			store.dispatch({ type: ACTIONS.INC });
		});

	document.getElementById('dec')
		.addEventListener('click', function () {
			store.dispatch({ type: ACTIONS.DEC });
		});

	store.subscribe(updateView);

	updateView();

	function updateView() {
		document.getElementById('counter').innerHTML = store.getState();
	}

	function reducer(state, action) {
		if (state === undefined) {
			return 0;
		}

		switch (action.type) {
			case ACTIONS.INC:
				return ++state;
				break;
			case ACTIONS.DEC:
				return --state;
				break;
			default:
				return state;
		}
	}
})();
