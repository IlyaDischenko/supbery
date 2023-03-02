import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    newsPage: {
        title: "",
        text: "",
        photo: ""
    }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNewsPageData: (state, action) => {
        state.newsPage = action.payload
    },
  },
  // extraReducers: {  
  //   [get_all_items.pending]: (state) => {
  //   },
  // }
})

export const { setNewsPageData } = appSlice.actions

export default appSlice.reducer