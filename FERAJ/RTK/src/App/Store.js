import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../Features/todoSlice"

const store = createStore({
    reducers: {
        todo: todoSlice,
    }
})

export default store;