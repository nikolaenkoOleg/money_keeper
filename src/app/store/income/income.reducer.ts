import {createReducer, on} from '@ngrx/store';

import {add, remove} from './income.actions';

export const incomeNode = 'income';

export interface IIncome {
  id: number;
  entry: string;
  value: number;
}

export interface IncomeState {
  income: IIncome[];
}

const initialState: IncomeState = {
  income: [
    {
      id: 0,
      entry: 'Работа',
      value: 100000,
    },
    {
      id: 2,
      entry: 'Аренда квартиры',
      value: 20000,
    }
  ],
};

export const incomeReducer = createReducer(
  initialState,

  on(add, (state, { entry }) => ({
    income: [...state.income, entry],
  })),

  on(remove, (state, { id }) => ({
    income: [
      ...state.income.filter((item) => item.id !== id),
    ],
  }))
);

