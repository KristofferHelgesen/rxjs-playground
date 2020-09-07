// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PersonModel } from '../model/person.model';


export const ADD_PERSON  = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';
export const EDIT_PERSON = '[PERSON] Edit';

export class AddPerson implements Action {
  readonly type = ADD_PERSON;
  constructor(public payload: PersonModel) {
  }
}

export class RemovePerson implements Action {
  readonly type = REMOVE_PERSON;
  constructor(public payload: number) {
  }
}

export class EditPerson implements Action {
  readonly type = EDIT_PERSON;
  constructor(public payload: PersonModel) {
  }
}
export type Actions = RemovePerson | AddPerson | EditPerson;
