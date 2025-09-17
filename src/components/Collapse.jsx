import { useState } from "react";
import "../styles/Collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();     
    setIsOpen((s) => !s);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="collapse-header"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <img src="/open.png" alt="" className="arrow" aria-hidden="true" />
      </button>

      <div className="collapse-content" role="region" aria-hidden={!isOpen}>
        {content}
      </div>
    </div>
  );
}
