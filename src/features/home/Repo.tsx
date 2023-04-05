import { addRepo } from "../../app/github/github.slice"
import { useAppDispatch } from "../../app/hooks"
import { IFav } from "../../models/models_fav"
import { IRepo } from "../../models/models_repos"

const Repo = ({repo}: {repo: IRepo}) => {
    const dispatch = useAppDispatch()
    const onBtnClick = (repo: IRepo) => {
        const {full_name, html_url, forks_count, watchers, description, id} = repo
        const obj: IFav = {
            full_name,
            html_url,
            forks_count,
            watchers,
            description,
            id
        }
        dispatch(addRepo(obj))
    }
    return <div className="repo-card" >
        <a href={repo.html_url} target="_blanket"><h3>{repo.full_name}</h3></a>
        <span>Forks: <span className="bold">{repo.forks_count}</span></span>
        <span className="watch-repo">Watchers: <span className="bold">{repo.watchers}</span></span>
        <div className="descr-repo">{repo?.description}</div>
        <button onClick={() => onBtnClick(repo)}>Add</button>
    </div>
}

export default Repo