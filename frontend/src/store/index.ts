import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import userSliceReducer from "./user";
import paylinkSliceReducer  from "./paylink";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux"; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // Add the slices you want to persist here
};

const rootReducer = combineReducers({
    user: userSliceReducer,
    paylink: paylinkSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;