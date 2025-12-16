import { useState } from "react";
import iconNext from "../../assets/icons/next-button.svg";
import iconPrev from "../../assets/icons/prev-button.svg";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextImage = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? index : index + 1));
  };
  const prevImage = () => {
    setCurrentIndex((index) => (index === 0 ? index : index - 1));
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 30) {
      nextImage();
    }
    if (touchStart - touchEnd < -30) {
      prevImage();
    }
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className={`flex overflow-visible`}>
        {images.map((data, index) => (
          <img src={data} alt="" key={index} className="aspect-square object-cover transition-transform duration-400" style={{ transform: `translateX(-${currentIndex * 100}%)` }} />
        ))}
      </div>
      {currentIndex > 0 && (
        <button className="absolute w-6 h-6 top-1/2 -translate-y-1/2 left-4 text-center border rounded-full border-textneutral cursor-pointer" onClick={prevImage}>
          <img src={iconPrev} alt="" className="h-full mx-auto" />
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button className="absolute w-6 h-6 top-1/2 -translate-y-1/2 right-4 text-center border rounded-full border-textneutral cursor-pointer" onClick={nextImage}>
          <img src={iconNext} alt="" className="h-3/4 ml-2" />
        </button>
      )}
    </div>
  );
}

export default ImageSlider;
