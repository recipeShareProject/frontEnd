import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalList: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    /* Modal push */
    pushModal(state, action) {
      const filtered = state.modalList.filter(
        (modal) => modal.name === action.payload.name,
      );
      if (filtered.length > 0) return;
      state.modalList.push(action.payload);
    },
    /* Modal pop */
    popModal(state) {
      const index = state.modalList.length - 1;
      if (index >= 0) {
        state.modalList.splice(index, 1);
      }
    },
    /* Modal OFF */
    deleteModal(state, action) {
      state.modalList = state.modalList.filter(
        (modal) => modal.name !== action.payload,
      );
    },
    /* ALl Modal OFF */
    clearModal(state) {
      state.modalList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
