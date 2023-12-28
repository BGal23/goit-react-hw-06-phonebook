import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;
