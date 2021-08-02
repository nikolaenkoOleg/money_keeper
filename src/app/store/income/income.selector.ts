import {createFeatureSelector, createSelector} from '@ngrx/store';

import {IIncome, incomeNode} from './income.reducer';

const selectIncomeFeature = createFeatureSelector<IIncome>(incomeNode);

export const selectIncomes = createSelector(
  selectIncomeFeature,
  (state: IIncome) => state,
);
