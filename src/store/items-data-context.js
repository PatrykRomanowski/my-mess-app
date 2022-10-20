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

    addItem(state, action) {
      const index = state.boxes.findIndex(
        (item) => item.id === action.payload.boxId
      );

      state.boxes[index].boxes = action.payload.boxId;
      console.log(index);
      console.log("add item");
      console.log(action.payload.newData);
    },
  },
});

export const dataItemsActions = dataItemsContext.actions;

export default dataItemsContext;
