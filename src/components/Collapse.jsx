import { useState } from "react";
import "../styles/Collapse.scss"; 

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img src="../open.png" className={`arrow ${isOpen ? "open" : ""}`}/>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}
