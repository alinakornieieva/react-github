import { IFav } from './../../models/models_fav';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    favourites: IFav[]
}

const initialState: initialStateType = {
    favourites: []
}

const GithubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addRepo: (state, action: PayloadAction<IFav>) => {
            state.favourites.push(action.payload)
        },
        deleteRepo: (state, action: PayloadAction<number>) => {
            state.favourites = state.favourites.filter(item => item.id !== action.payload)
        }
    }
})

const {reducer, actions} = GithubSlice
export default reducer
export const {addRepo, deleteRepo} = actions