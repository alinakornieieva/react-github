import { useEffect, useState } from "react"
import { useLazyGetUserQuery, useSearchUsersQuery } from "../../app/github.api"
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
    const [fetchRepos, {data: repos, isLoading: areREposLoading, isError: areReposError}] = useLazyGetUserQuery()
    const onUserClick = (userName: string) => {
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
            {data?.map(user => <li key={user.id}
            onClick={() => onUserClick(user.login)}>
                {user.login}
            </li>)}
        </ul>}
        {repos?.map((repo) => <Repo key={repo.url} repo={repo}/>)}
    </main>
}

export default Home