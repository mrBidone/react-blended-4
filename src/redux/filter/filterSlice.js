import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTodos } from '../todos/todosSlice';

const INITIAL_STATE = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.name = action.payload;
    },
  },
});
export const filterReducer = filtersSlice.reducer;

export const selectFilter = state => state.filter.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (items, filterValue) =>
    items.filter(item => {
      return item.name.toLowerCase().includes(filterValue.toLowerCase());
    }),
);
