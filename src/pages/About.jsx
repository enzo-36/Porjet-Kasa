import "../styles/About.scss";
import Collapse from "../components/Collapse";
import { aboutList } from "../data/AboutList";
import '../styles/_mixins.scss';

export default function About() {
  return (
    <div className="about">
      <div className="banner about-banner">
        <img src="/footerKasa.png" alt="Montagnes" className="banner-img" />
      </div>

      <div className="dropdowns">
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

