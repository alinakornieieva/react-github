import { NavLink } from "react-router-dom"
import './Navigation.scss'

const Navigation = () => {
    return <nav>
        <h3>Github Search</h3>
        <span>
            <NavLink to='/'  style={({ isActive }) => ({
                color: isActive ? '#000' : '#545e6f',
            })}>Home</NavLink>
            <NavLink to='/favourites'  style={({ isActive }) => ({
                color: isActive ? '#000' : '#545e6f',
            })}>Favourites</NavLink>
        </span>
    </nav>
}

export default Navigation