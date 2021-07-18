import { Component } from '@angular/core';

import { IEntryData } from './interfaces/mk.interface';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public entrtiesData: IEntryData[] = [
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
}
