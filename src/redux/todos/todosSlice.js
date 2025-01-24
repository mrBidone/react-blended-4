import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  currentTodo: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      item.text = action.payload.todo;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;

export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.loading;
export const selectError = state => state.todos.error;
export const selectEditTodo = state => state.todos.currentTodo;
