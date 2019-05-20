import { bindable } from 'aurelia-framework';
import { Location } from '../../services/point-types';

export class Coordinates {
  @bindable location: Location;
}
