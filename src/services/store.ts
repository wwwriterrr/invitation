import {combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { authSlice, TAuthInternalActions } from './auth/slice';

export const rootReducer = combineReducers({
    [authSlice.reducerPath]: authSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

type TApplicationActions = TAuthInternalActions;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
