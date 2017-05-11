import { Action } from 'redux';
import { ACTIONS } from './app.actions';

export interface IAppState {
	count: number
}

export const INITIAL_STATE: IAppState = {
	count: 0
};

export function rootReducer(state: IAppState, action: Action) {
	console.log('action', action);
	return {
		count: countReducer(state.count, action)
	};
}

function countReducer(state, action) {
	if (state === undefined) {
		return 0;
	}

	switch (action.type) {
		case ACTIONS.INC:
			return ++state;
		case ACTIONS.DEC:
			return --state;
		default:
			return state;
	}
}
