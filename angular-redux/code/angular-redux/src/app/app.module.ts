import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { INITIAL_STATE, IAppState, rootReducer } from './app.store';
import { ACTIONS } from './app.actions';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgReduxModule
	],
	providers: [ACTIONS],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {
		ngRedux.configureStore(
			rootReducer,
			INITIAL_STATE,
			[],
			devTools.enhancer()
		);
	}
}
