import { IFav } from './../../models/models_fav';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FAV_REPOS = 'favouriteRepos'

type initialStateType = {
    favourites: IFav[]
}

const initialState: initialStateType = {
    favourites: JSON.parse(localStorage.getItem(FAV_REPOS) ?? '[]')
}

const GithubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addRepo: (state, action: PayloadAction<IFav>) => {
            const findElem = state.favourites.find(el => el.id === action.payload.id)
            if (!findElem) {
                state.favourites.push(action.payload)
                localStorage.setItem(FAV_REPOS, JSON.stringify(state.favourites))
            }
        },
        deleteRepo: (state, action: PayloadAction<number>) => {
            state.favourites = state.favourites.filter(item => item.id !== action.payload)
            localStorage.setItem(FAV_REPOS, JSON.stringify(state.favourites))
        }
    }
})

const {reducer, actions} = GithubSlice
export default reducer
export const {addRepo, deleteRepo} = actions