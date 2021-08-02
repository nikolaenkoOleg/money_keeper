import {Component, Input} from '@angular/core';
import * as moment from 'moment';

import {IStats} from '../../interfaces/mk.interface';

@Component({
  selector: 'mk-category',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss'],
})
export class CategoryComponent {
  @Input() title: string;
  @Input() stats: IStats[];
  @Input() category: string;

  public entriesData = [
    {
      id: '0',
      entry: 'Работа',
      value: '100000',
    }
  ];

  public date: string;

  constructor() {
    moment.locale('ru');
    this.date = moment().format('MMM YYYY');
  }
}
