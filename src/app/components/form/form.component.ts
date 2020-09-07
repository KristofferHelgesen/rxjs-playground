import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
 import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {PersonModel} from '../../model/person.model';
import {AppState} from '../../app.state';

import * as PersonActions from '../../actions/person.actions';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    @ViewChild('fNameInputField') fNameInputField;
    @ViewChild('lNameInputField') lNameInputField;

    selectedUser: PersonModel;
    persons: Observable<PersonModel[]>;


  constructor(private store: Store<AppState>) {
    this.persons = store.select('persons');
  }


  ngOnInit(): void { }



  onSubmit(form: NgForm) {
    console.log('Persons' , form);
    this.store.dispatch(new PersonActions.AddPerson( new PersonModel(Math.random(), form.value.fname, form.value.lname)))
  }

  onRemove(id: number){
    this.store.dispatch(new PersonActions.RemovePerson(id));
  }

  onUpdate(){
    console.log(this.selectedUser.fname);
    console.log(this.lNameInputField.nativeElement.value);

    const fName: string = this.fNameInputField.nativeElement.value || '';
    const lName: string = this.lNameInputField.nativeElement.value || '';

    const updatedUser = {...this.selectedUser, fname: fName, lname: lName};
    console.log(updatedUser);
    this.store.dispatch(new PersonActions.EditPerson(updatedUser));
  }

  selectUser(person: PersonModel) {

      this.selectedUser = person;
    console.log(this.selectedUser);
  }
}
