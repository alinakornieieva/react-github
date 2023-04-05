import { IRepo } from "../../models/models_repos"

const Repo = ({repo}: {repo: IRepo}) => {
    return <div className="repo-card">
        <h3>{repo.full_name}</h3>
        <span>Forks: <span className="bold">{repo.forks_count}</span></span>
        <span className="watch-repo">Watchers: <span className="bold">{repo.watchers}</span></span>
        <div className="descr-repo">{repo?.description}</div>
    </div>
}

export default Repo