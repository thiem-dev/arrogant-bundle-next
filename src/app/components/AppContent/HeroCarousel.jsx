import { useRef } from 'react';
import '../../../css/herocarousel.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

import Image from 'next/image';
const nextMedia = `/media`;

const HeroCarousel = ({ images, setCurrentIndex, currentIndex }) => {
  const imageRef = useRef(null); // for horizontal scroll according to image width

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const imageWidth = imageRef.current ? imageRef.current.offsetWidth : 0;
  const gapWidth = 15;

  return (
    <>
      <div className="carousel-box">
        <div className="nav-button prev" onClick={prevImage}>
          {<FaChevronLeft />}
        </div>
        <div className="nav-button next" onClick={nextImage}>
          {<FaChevronRight />}
        </div>
        <div className="carousel-container">
          <div
            className="image-wrapper"
            style={{
              transform: `translateX(-${
                currentIndex * (imageWidth + gapWidth)
              }px)`,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={image + index + 'hero'}
                className={`carousel-image ${
                  index === currentIndex ? 'active' : ''
                }`}
                width={500} //placeholder height n width
                height={300}
                src={nextMedia + image}
                alt={`Image ${index + 1}`}
                onClick={() => handleClick(index)}
                ref={index === 0 ? imageRef : null}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
