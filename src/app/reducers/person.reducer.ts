import { Action } from '@ngrx/store';
import { PersonModel } from '../model/person.model';
import * as PersonActions from '../actions/person.actions';

const initState: PersonModel =  new PersonModel(1, 'Kriss', 'Helgesen');


export function personReducer(state: PersonModel[] = [initState], action: PersonActions.Actions){

  switch (action.type) {

    case PersonActions.ADD_PERSON:

      return [...state, action.payload];

    case PersonActions.REMOVE_PERSON:
      const newArray = state.filter( person => person.id !== action.payload);
      state = newArray;
      return  state;
    case PersonActions.EDIT_PERSON:

      const indexOfPerson = state.findIndex(person => person.id === action.payload.id);
      const copyOfStateArray = [...state];
      copyOfStateArray[indexOfPerson] = action.payload
      return copyOfStateArray;
    default:
      return state;
  }

}
