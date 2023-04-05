import { useEffect, useState } from "react"
import { useSearchUsersQuery } from "../../app/github.api"
import './Home.scss'
import useDebounce from "../../hook/debounce"

const Home = () => {
    const {isError, isLoading, data} = useSearchUsersQuery('alina')
    const [search, setSearch] = useState('')
    const debounce = useDebounce(search)
    useEffect(() => {
        console.log(debounce)
    }, [debounce])
    return <main>
        <div className="input-div">
            <input type="text" placeholder="Search for Github user..."
            value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            <div>
                Lorem ipsum Reiciendis vero laboriosam rem suscipit 
            </div>
        </div>
    </main>
}

export default Home