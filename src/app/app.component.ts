import {Component} from '@angular/core';

import {IStats} from './interfaces/mk.interface';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
