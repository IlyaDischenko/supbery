import { configureStore } from '@reduxjs/toolkit'

import app from './appState/AppSlice'
import menu from './menuState/MenuSlice'

export default configureStore({
  reducer: {
    app,
    menu
  },
})