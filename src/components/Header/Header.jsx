import { Link, NavLink } from 'react-router-dom';
import Container from "../Container/Container.jsx";
import logo from "../../assets/TravelTrucks.svg"
import css from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <Container>
        <div className={css.header}>
        <nav className={css.navigation}>
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
          <ul className={css.headerList}>
          <NavLink to="/"><li className={css.headerItem}>Home</li></NavLink>
          <NavLink to="/catalog"><li className={css.headerItem}>Catalog</li></NavLink>
          </ul>
        </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
