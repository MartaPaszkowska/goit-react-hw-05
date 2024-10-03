import { NavLink } from "react-router-dom";
import css from "../css/Navigation.module.css";

export default function Navigation() {
	return (
		<nav className={css.nav}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? css.activeLink : css.link
				}
			>
				Home
			</NavLink>
			<div></div>
			<NavLink
				to="/movies"
				className={({ isActive }) =>
					isActive ? css.activeLink : css.link
				}
			>
				Movies
			</NavLink>
		</nav>
	);
}
