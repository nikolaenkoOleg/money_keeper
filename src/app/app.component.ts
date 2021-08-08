import {Observable} from 'rxjs';
import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getIncomes} from './store/income/income.selector';
import {IIncome} from './store/income/income.reducer';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public income$: Observable<IIncome[]>;

  constructor(private store$: Store) {
    this.income$ = this.store$.pipe(select(getIncomes));
  }
}
