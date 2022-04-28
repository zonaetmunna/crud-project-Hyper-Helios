import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from '../redux/slices/contactsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux"; 


const persistConfig = {
     key: 'root',
     storage,
};

const reducers = combineReducers({
     contacts:contactsSlice           
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store=configureStore({
     reducer: persistedReducer
});


export let persistor = persistStore(store);