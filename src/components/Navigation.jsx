import { NavLink } from "react-router-dom";
import css from "../css/Navigation.module.css";

export default function Navigation() {
	<nav className={css.nav}>
		<NavLink
			to="/"
			className={({ isActive }) => (isActive ? css.activeLink : css.link)}
		>
			Home
		</NavLink>
		<NavLink
			to="/movies"
			className={({ isActive }) => (isActive ? css.activeLink : css.link)}
		>
			Movies
		</NavLink>
	</nav>;
}
