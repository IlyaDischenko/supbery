import { configureStore } from '@reduxjs/toolkit'

import app from './appState/AppSlice'

export default configureStore({
  reducer: {
    app,
  },
})