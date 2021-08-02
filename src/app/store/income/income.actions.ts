import {createAction, props} from '@ngrx/store';

import {IIncome} from './income.reducer';

const enum incomeActions  {
  add = '[Income] Add',
  remove = '[Income] Remove',
}

const add = createAction(
  incomeActions.add,
  props<{ entry: IIncome }>()
);
const remove = createAction(
  incomeActions.remove,
  props<{ id: number }>()
);

export { add, remove };
