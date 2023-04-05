import { useAppSelector } from "../../app/hooks"

const Favourites = () => {
    const {favourites} = useAppSelector(state => state.github)
    console.log(favourites)
    return <main>
        {/* {favourites?.map((repo: IRE) => { <div>
            <a href={repo.html_url} target="_blanket"><h3>{repo.full_name}</h3></a>
            <span>Forks: <span className="bold">{repo.forks_count}</span></span>
            <span className="watch-repo">Watchers: <span className="bold">{repo.watchers}</span></span>
            <div className="descr-repo">{repo?.description}</div>
            <button>Add</button>
            </div>
        })} */}
    </main>
}

export default Favourites