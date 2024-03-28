import '../../../../css/popularcarousel.css';
import { useRef, useState } from 'react';
import { FaRegStar, FaStar, FaShoppingCart } from 'react-icons/fa';
import PopCardTip from './PopCardTip';

import Image from 'next/image';
const nextMedia = `/media`;

const PopCard = ({ popGames, cardRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const priceRef = useRef(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const starClick = (e) => {
    console.log('starclicked');
  };

  const addToCart = (game) => {
    console.log('add to cart', game.title);
  };

  return popGames.map((game, index) => (
    <div
      className="carouselCard"
      ref={cardRef}
      key={game.title + index + 'pop'}
    >
      <a target="_blank" rel="noopener noreferrer" href={`${game.link}`}>
        <Image
          className="card-img"
          src={nextMedia + game.thumbnail_link}
          alt={game.title}
          width={270}
          height={154}
        />
        <div className="title-box">
          <p className="card-title">{game.title}</p>
          <a
            target="_blank"
            href={`${nextMedia}${game.title}?action=wishlist`}
            rel="noopener noreferrer"
            onClick={() => starClick()}
            className="starholder"
          >
            <FaRegStar className="star starOne" />
            <FaStar className="star starTwo" />
          </a>
        </div>
      </a>

      <div className="card-footer">
        <div className="card-systems-box">
          <div className="card-system-platforms">
            {game.platform_images.map((image, index) => (
              <Image
                src={nextMedia + image}
                alt="platforms"
                key={image + index + 'plat'}
                width={16}
                height={16}
              />
            ))}
          </div>

          <div className="verticalborder"></div>

          <div className="card-system-os">
            {game.operating_system_images.map((image, index) => (
              <Image
                src={nextMedia + image}
                alt="os"
                key={image + index + 'os'}
                width={16}
                height={16}
              />
            ))}
          </div>
        </div>

        <div className="card-price-ctn">
          {game.deal ? (
            <>
              <div
                className="pop-discount-ctn"
                ref={priceRef}
                data-tooltip-id="discount-tip"
              >
                <p>-{game.deal}%</p>
              </div>
              <div
                className="pop-price-deal pop-hover"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                onClick={() => {
                  addToCart(game);
                }}
              >
                {hoveredIndex === index ? (
                  <div>
                    <FaShoppingCart /> Add
                  </div>
                ) : (
                  `$${game.deal_price}`
                )}
              </div>
              <PopCardTip game={game} />
            </>
          ) : (
            <>
              <div
                className="pop-price pop-hover"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                onClick={() => {
                  addToCart(game);
                }}
              >
                {hoveredIndex === index ? (
                  <div>
                    <FaShoppingCart /> Add
                  </div>
                ) : (
                  `$${game.price}`
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div> // end carousel card
  )); // end game map fx
};

export default PopCard;
