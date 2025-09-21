import useLogements from "../hooks/useLogements";
import {Link} from"react-router-dom";
import '../styles/_mixins.scss';
export default function Home() {

  const logements = useLogements();


  return (
    <div className="home">
     <div className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
     </div>
     <div className="cards-container">
      <div className="gallery">
        {logements.map((logement) => (
          <Link key={logement.id} 
          to={`/logement/${logement.id}`} 
          className="card">
            <img src={logement.cover} alt={logement.title} />
            <div className="card-title">{logement.title}</div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
}
