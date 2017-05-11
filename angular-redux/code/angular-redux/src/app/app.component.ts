import { Component } from '@angular/core';
import { ACTIONS } from './app.actions';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './app.store';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// Grabs an observable for the state property matching the variable name.
	@select()
	count$: Observable<number>;

	constructor(private ACTIONS: ACTIONS, private ngRedux: NgRedux<IAppState>) {
		this.count$.subscribe(function (count) {
			console.log('Count changed.');
		});
	}

	increment() {
		this.ngRedux.dispatch({
			type: ACTIONS.INC
		});
	}

	decrement() {
		this.ngRedux.dispatch({
			type: ACTIONS.DEC
		});
	}
}
