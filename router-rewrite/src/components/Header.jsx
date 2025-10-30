import { NavLink } from 'react-router-dom';
import logo from '../assets/apprenti logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Apprenti Logo" width="40" height="40" />
            <h1 className="logo">Apprenti Careers</h1>
            <nav aria-label="Primary">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}
