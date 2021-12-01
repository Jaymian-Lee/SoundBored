import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { slice as soundSlice } from './slices/soundSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

 // AsyncStorage.clear()

const reducers = combineReducers({
  sound: soundSlice.reducer
});
 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};
 
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})