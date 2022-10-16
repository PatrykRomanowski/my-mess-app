import {
  createSlice
} from "@reduxjs/toolkit";

const dataItemsContext = createSlice({
  name: "dataItems",
  initialState: {
    boxes: [],
    boxCounter: 0,
  },

  reducers: {
    initialState(state, action) {
      console.log(action.payload.boxes);
      console.log(action.payload.boxesCounter);

      state.boxes = action.payload.boxes;
      state.boxCounter = action.payload.boxesCounter;

    },

    addBox(state, action) {
      state.boxCounter = state.boxCounter + 1;
      const newBoxesList = state.boxes.push(action.payload.newBox);
      state.boxes = newBoxesList;

    },

    deleteBox(state, action) {
      state.boxCounter = state.boxCounter - 1;

      const newListGame = state.boxes.filter((item) => item.id !== action.payload.id);
      state.boxes = newListGame;

    },
  },
});

export const dataItemsActions = dataItemsContext.actions;

export default dataItemsContext;