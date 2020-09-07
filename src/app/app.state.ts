import {PersonModel } from './model/person.model';
import {TitleModel} from './model/page.model';

export interface AppState {
  readonly persons: PersonModel[];
  readonly title: TitleModel;
}
