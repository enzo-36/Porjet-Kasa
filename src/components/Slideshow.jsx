import { useState } from "react";
import "../styles/Slideshow.scss";

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!images || length === 0) return null;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="slideshow">
      {length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <button className="arrow right" onClick={nextSlide}>❯</button>
          <div className="counter">{current + 1}/{length}</div>
        </>
      )}

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={index === current ? "slide active" : "slide"}
        />
      ))}
    </div>
  );
}
