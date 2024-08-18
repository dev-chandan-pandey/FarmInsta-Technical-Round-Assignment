import { configureStore } from '@reduxjs/toolkit';
import contentCreatorReducer from './contentCreatorSlice';

const store = configureStore({
  reducer: {
    contentCreators: contentCreatorReducer,
  },
});

export default store;
