import {Component, Input} from '@angular/core';
import * as moment from 'moment';

import {IIncome} from '../../store/income/income.reducer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss'],
})
export class CategoryComponent {
  @Input() title: string;
  @Input() category: string;
  @Input() data: Observable<IIncome[]>;

  public date: string;

  constructor() {
    moment.locale('ru');
    this.date = moment().format('MMM YYYY');
  }
}
