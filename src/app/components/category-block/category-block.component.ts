import { Component, Input } from '@angular/core';
import * as moment from 'moment';


import { IEntryData, IStats } from '../../interfaces/mk.interface';



@Component({
  selector: 'mk-category',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss'],
})
export class CategoryComponent {
  @Input() title: string;
  @Input() stats: IStats[];
  @Input() category: string;
  @Input() entriesData: IEntryData[];

  public month: string;

  constructor() {
    moment.locale('ru');
    this.month = moment().format('MMM YYYY');
  }
}
