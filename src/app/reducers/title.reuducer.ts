import { Action } from '@ngrx/store';

import * as TitleActions from '../actions/title.actions';
import {TitleModel} from '../model/page.model';
import * as PersonActions from '../actions/person.actions';

const initState: TitleModel = new TitleModel("Eksempel på RXJS ");

export function titleReducer(state = initState, action: TitleActions.Actions){

  switch (action.type) {

    case TitleActions.GET_TITLE:
      return  state;

    case  TitleActions.EDIT_TITLE:

      const newState = action.payload;
      return newState;
    default:
      return state;
  }

}
