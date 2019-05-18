import { bindable } from 'aurelia-framework';
import { Review } from '../../services/point-types';

export class ReviewList {
  @bindable
  reviews : Review[];
}
