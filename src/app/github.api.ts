import { ReposResponse } from '../models/models_repos';
import { IUser, UsersResponse } from './../models/models';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: UsersResponse) => response.items
        }),
        getUser: build.query<ReposResponse, string>({
            query: (userName: string) => ({
                url: `users/${userName}/repos`
            })
        })
    })
})

export default githubApi
export const {useSearchUsersQuery, useLazyGetUserQuery} = githubApi