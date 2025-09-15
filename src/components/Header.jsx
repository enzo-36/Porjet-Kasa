import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src="/LOGO.png" alt="Kasa Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}



