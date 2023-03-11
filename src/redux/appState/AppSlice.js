import { createSlice } from '@reduxjs/toolkit'


const initialState = {

}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // setNewsPageData: (state, action) => {
    //     state.newsPage = action.payload
    // },
  },
  // extraReducers: {  
  //   [get_all_items.pending]: (state) => {
  //   },
  // }
})

export const {  } = appSlice.actions

export default appSlice.reducer