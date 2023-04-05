import { useEffect, useState } from "react"
import { useLazyGetUserQuery, useSearchUsersQuery } from "../../app/github/github.api"
import './Home.scss'
import useDebounce from "../../hook/debounce"
import Repo from "./Repo"

const Home = () => {
    const [search, setSearch] = useState('')
    const debounce = useDebounce(search)
    const [dropdown, setDropdown] = useState(false)
    const {isError, isLoading, data} = useSearchUsersQuery(debounce, {
        skip: debounce.length < 1
    })
    const [fetchRepos, {data: repos, isLoading: areReposLoading, isError: areReposError}] = useLazyGetUserQuery()
    const onUserClick = (userName: string) => {
        setDropdown(false)
        fetchRepos(userName)
    }
    useEffect(() => {
        setDropdown(debounce.length > 0 && data?.length! > 0)
    }, [debounce, data])
    return <main>
        <input type="text" placeholder="Search for Github user..."
        value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
        {dropdown && <ul className={data?.length! > 8 ? 'scroll' : ''}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {data?.map(user => <li key={user.id}
            onClick={() => onUserClick(user.login)}>
                {user.login}
            </li>)}
        </ul>}
        {areReposLoading && <p>Repos are loading...</p>}
        {areReposError && <p>Something went wrong...</p>}
        {dropdown || debounce.length === 0 ? null : repos?.map((repo) => <Repo key={repo.url} repo={repo}/>)}
    </main>
}

export default Home