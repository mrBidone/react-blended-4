import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTodos } from '../todos/todosSlice';

const INITIAL_STATE = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;

export const selectFilter = state => state.filter.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (items, filterValue) =>
    items.filter(item => {
      return item.text.toLowerCase().includes(filterValue.toLowerCase());
    }),
);

export const { setFilterValue } = filterSlice.actions;
