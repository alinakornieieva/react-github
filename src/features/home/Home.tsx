import { useEffect, useState } from "react"
import { useSearchUsersQuery } from "../../app/github.api"
import './Home.scss'
import useDebounce from "../../hook/debounce"

const Home = () => {
    const [search, setSearch] = useState('')
    const debounce = useDebounce(search)
    const [dropdown, setDropdown] = useState(false)
    const {isError, isLoading, data} = useSearchUsersQuery(debounce, {
        skip: debounce.length < 1
    })
    useEffect(() => {
        console.log(debounce)
        setDropdown(debounce.length > 0 && data?.length! > 0)
    }, [debounce, data])
    return <main>
        <div className="input-div">
            <input type="text" placeholder="Search for Github user..."
            value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            {dropdown && <ul className={data?.length! > 8 ? 'scroll' : ''}>
                {isLoading && <p>Loading...</p>}
                {data?.map(user => <li key={user.id}>
                    {user.login}
                </li>)}
            </ul>}
        </div>
    </main>
}

export default Home