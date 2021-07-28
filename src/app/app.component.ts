import {Component} from '@angular/core';

import {IEntryData, IStats} from './interfaces/mk.interface';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public entriesData: IEntryData[] = [
    {
      entry: 'Работа',
      value: 100000,
    },
    {
      entry: 'Аренда квартиры',
      value: 25000,
    },
    {
      entry: 'Работа',
      value: 100000,
    },
    {
      entry: 'Аренда квартиры',
      value: 25000,
    },
    {
      entry: 'Работа',
      value: 100000,
    },
    {
      entry: 'Аренда квартиры',
      value: 25000,
    },
    {
      entry: 'Работа',
      value: 100000,
    },
    {
      entry: 'Аренда квартиры',
      value: 25000,
    },
    {
      entry: 'Работа',
      value: 100000,
    },
    {
      entry: 'Аренда квартиры',
      value: 25000,
    },
  ];
  public stats: IStats[] = [
    {
      value: 20000,
      description: 'Получено',
      currency: 'rub',
    },
    {
      value: 45000,
      description: 'Бюджет доходов',
      currency: 'rub',
    }
  ];
}
