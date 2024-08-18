import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  creators: [],
};

const contentCreatorSlice = createSlice({
  name: 'contentCreators',
  initialState,
  reducers: {
    addCreator: (state, action) => {
      state.creators.push(action.payload);
    },
    updateCreator: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.creators.findIndex(creator => creator.id === id);
      if (index !== -1) {
        state.creators[index] = { ...state.creators[index], ...updatedData };
      }
    },
    deleteCreator: (state, action) => {
      state.creators = state.creators.filter(creator => creator.id !== action.payload);
    },
  },
});

export const { addCreator, updateCreator, deleteCreator } = contentCreatorSlice.actions;
export default contentCreatorSlice.reducer;
