import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGuest } from '../../core/type';
import { fetchUser } from './actions';
// import { fetchUser } from './actions';


type TAuthInitialState = {
    user: TGuest | null,
    loading: boolean,
}

const initialState: TAuthInitialState = {
    user: null,
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TGuest | null>) => {
            state.user = action.payload;
        },
    },
    selectors: {
        getUser: state => state.user,
        getUserLoading: state => state.loading,
    },
    extraReducers: (builder) => {
        builder
            // Auth actions
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.user = null;
                state.loading = false;
            })
            .addCase(fetchUser.fulfilled, (state) => {
                state.loading = false;
            })
    }
})

export default authSlice.reducer;

// export const {} = authSlice.actions;

export const {getUser, getUserLoading} = authSlice.selectors;

export const {setUser} = authSlice.actions;

export type TAuthInternalActions = ReturnType<typeof authSlice.actions[keyof typeof authSlice.actions]>;