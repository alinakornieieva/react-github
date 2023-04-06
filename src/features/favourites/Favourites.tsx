import { deleteRepo } from "../../app/github/github.slice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { IFav } from "../../models/models_fav"

const Favourites = () => {
    const {favourites} = useAppSelector(state => state.github)
    const dispatch = useAppDispatch()
    return <main>
        {favourites.length < 1 && <p>No favourites repos...</p>}
        {favourites?.map((repo: IFav) => <div key={repo.id} className="repo-card">
            <a href={repo.html_url} target="_blanket"><h3>{repo.full_name}</h3></a>
            <span>Forks: <span className="bold">{repo.forks_count}</span></span>
            <span className="watch-repo">Watchers: <span className="bold">{repo.watchers}</span></span>
            <div className="descr-repo">{repo?.description}</div>
            <button onClick={() => dispatch(deleteRepo(repo.id))}>Delete</button>
            </div>
        )}
    </main>
}

export default Favourites