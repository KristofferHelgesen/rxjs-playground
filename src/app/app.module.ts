import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import {personReducer} from './reducers/person.reducer';
import  {titleReducer} from './reducers/title.reuducer';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({persons: personReducer, title: titleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
