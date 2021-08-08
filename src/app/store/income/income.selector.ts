import {createFeatureSelector, createSelector} from '@ngrx/store';

import {incomeNode, IncomeState} from './income.reducer';

const selectIncomeFeature = createFeatureSelector<IncomeState>(incomeNode);

export const getIncomes = createSelector(
  selectIncomeFeature,
  (state: IncomeState) => state.income,
);
