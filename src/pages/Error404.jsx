import { Link } from "react-router-dom";
import "../styles/Error404.scss";
import '../styles/_mixins.scss';
export default function Error404() {
  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
