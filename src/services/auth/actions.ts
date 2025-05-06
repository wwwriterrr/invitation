import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, setUserData } from "./slice";
import { BackendUrl } from "../../core/constants";
import { type TGuestData } from "../../core/type";

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async ({token}: {token: string}, {rejectWithValue, dispatch}) => {
        try{
            const url = new URL(`${BackendUrl}guest/${token}/`);

            const response = await fetch(url, {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if(!response.ok){
                return rejectWithValue('Error with fetch user');
            }

            const data: {name: string, data: TGuestData} = await response.json();

            dispatch(setUser({name: data.name, token, data: data.data}));

            return;
        }catch (err){
            return rejectWithValue(err);
        }
    }
)

export const sendUserData = createAsyncThunk(
    'auth/sendUserData',
    async ({token, data}: {token: string, data: TGuestData}, {rejectWithValue, dispatch}) => {
        try{
            const url = new URL(`${BackendUrl}guest/${token}/`);

            data.formSend = true;

            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({data}),
            });

            if(!response.ok){
                return rejectWithValue('Error with fetch user');
            }

            dispatch(setUserData(data));

            return;
        }catch (err){
            return rejectWithValue(err);
        }
    }
)

export type TAuthExternalActions = ReturnType<typeof fetchUser> | ReturnType<typeof sendUserData>;
