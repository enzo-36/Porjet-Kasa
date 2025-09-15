import { useParams } from "react-router-dom";
import useLogements from "../hooks/useLogements";
import Slideshow from "../components/Slideshow";
import "../styles/Logements.scss";

export default function Logement() {
  const { id } = useParams();
  const logements = useLogements();
  const logement = logements.find((l) => l.id === id);

  if (!logement) return null;

  return (
    <div className="logement-page">
      <Slideshow images={logement.pictures} />

      <div className="logement-info">
        <div>
          <h1 className="title">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="rating">
            {Array(5).fill().map((_, i) => (
              <span key={i}>{i < logement.rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="logement-collapses">
      <div className="collapse">
        <div className="collapse-header">Description</div>
        <div className="collapse-content">{logement.description}</div>
      </div>

      <div className="collapse">
        <div className="collapse-header">Équipements</div>
        <div className="collapse-content">
          <ul>
            {logement.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
