import {
    createSlice
} from "@reduxjs/toolkit";

const dataMessContext = createSlice({
    name: 'data',
    initialState: {
        userId: null,
        userName: null,
    },
    reducers: {
        addNameUser(state, action) {
            const fetchData = () => {
                // const response = await fetch(action.payload.url + "myUsers/" + action.payload.userId + '.json');
                // const responseData = await response.json().then((res) => state.userName = res.name);
                // console.log(responseData.name);
                // state.userName = responseData.name;
            };

            fetchData();
        },

        addUserId(state, action) {
            state.userId = action.payload.date;
        }
    }

});

export const dataMessAction = dataMessContext.actions;

export default dataMessContext;