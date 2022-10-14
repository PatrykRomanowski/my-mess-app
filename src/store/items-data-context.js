import { createSlice } from "@reduxjs/toolkit";

const dataItemsContext = createSlice({
  name: "dataItems",
  initialState: {
    boxes: [{}],
    boxCounter: 0,
  },

  reducers: {
    initialState(state, action) {
      console.log(action.payload.boxes);
      console.log(action.payload.boxesCounter);

      state.boxes = action.payload.boxes;
      state.boxCounter = action.payload.boxesCounter;

      console.log(state.boxes);
    },

    addBox(state, action) {},

    deleteBox(state, action) {},
  },
});

export const dataItemsActions = dataItemsContext.actions;

export default dataItemsContext;
