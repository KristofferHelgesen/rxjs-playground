
import { Action } from '@ngrx/store';
import {TitleModel} from '../model/page.model';


export const GET_TITLE  = '[TITLE] Title';
export const EDIT_TITLE = '[TITLE] EditTitle';

export class GetTitle implements Action {

  readonly type = GET_TITLE;
  constructor() {
  }
}

export class EditTitle implements Action {
  readonly type = EDIT_TITLE;
  constructor(public payload: TitleModel) {
  }
}
export type Actions = GetTitle | EditTitle;
