import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

import {take} from 'rxjs/operators';
import * as TitleActions from '../../actions/title.actions';
import {TitleModel} from '../../model/page.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements  OnInit {

    title: string = "Loading";


    constructor(private store: Store<AppState>) {



   }
  updateTitle(){
   // this.store.dispatch(new TitleActions.EDIT_TITLE(new TitleModel('Endret tittel')));
  }

  ngOnInit(): void {
    this.store.select('title').pipe(
      take(4)
    ).subscribe(data => {
     this.title = data.title;
    });
  }
}
