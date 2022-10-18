import { createSlice } from "@reduxjs/toolkit";

const dataItemsContext = createSlice({
  name: "dataItems",
  initialState: {
    boxes: [],
    boxCounter: 0,
  },

  reducers: {
    initialState(state, action) {
      state.boxes = action.payload.boxes;
      state.boxCounter = action.payload.boxesCounter;
    },

    addBox(state, action) {
      state.boxCounter = state.boxCounter + 1;
    },

    deleteBox(state, action) {
      state.boxCounter = state.boxCounter - 1;

      const newListGame = state.boxes.filter(
        (item) => item.id !== action.payload.id
      );
      state.boxes = newListGame;
    },
  },
});

export const dataItemsActions = dataItemsContext.actions;

export default dataItemsContext;
