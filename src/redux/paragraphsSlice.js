import { createSlice } from "@reduxjs/toolkit";
import MockTextList from "../mock-textparagraps.json"

const dataTexts = MockTextList.paragraphs
export const paragraphsSlice = createSlice({
    name: "paragraphs",
    initialState: {
        items: dataTexts,
        count: 4
    },
    reducers: {
        firstPage: (state, action) => {
            state.items = state.items.slice(0, 4)
        },
        changeCount: (state, action) => {
            state.count = action.payload
        },
        showPram: (state, action) => {
            state.items = dataTexts
            state.items = state.count > 0 ? state.items.slice(0, state.count) : [state.count = 1]
        }
    },

})

export const { firstPage, changeCount, showPram } = paragraphsSlice.actions;
export default paragraphsSlice.reducer;