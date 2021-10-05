import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { services } from './services/index';
import { CustomSerializer, effects, metaReducers, reducers } from './store/index';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		DataTablesModule,
		HttpClientModule,
		ModalModule.forRoot(),
		EffectsModule.forRoot(effects),
		StoreRouterConnectingModule.forRoot(),
		StoreModule.forRoot(reducers, {
			metaReducers, runtimeChecks: { strictStateImmutability: false, strictActionImmutability: false }
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25 }),
	],
	providers: [
		...services,
		{ provide: RouterStateSerializer, useClass: CustomSerializer }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
