import '../../../../css/popularcarousel.css';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import { useState, useRef } from 'react';
import PopCard from './PopCard';

// TODO conditional rendering based on genre
const PopularCarousel = ({productData}) => {

    const {
        other_popular_games: popGames, 
        genre,
    } = productData

    const [currentIndex, setCurrentIndex] = useState(0); //carousel index
    const cardRef = useRef(null);

    const cardWidth = cardRef.current ? cardRef.current.offsetWidth : 0;
    const gapWidth = 12;
    const carouselSize = 4 - 1; // carousel displays 4 cards at time
    const isLeftDisabled = currentIndex === 0;
    const isRightDisabled = currentIndex === popGames.length - 1 - carouselSize;

    const nextImage = () => {
        if(!isRightDisabled) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % popGames.length);
        }
    };
    
    const prevImage = () => {
        if(!isLeftDisabled){
            setCurrentIndex((prevIndex) => (prevIndex - 1 + popGames.length) % popGames.length);
        }
    };

    return (
    <>
        <div id='pop-carousel-section' className='ctn'>
            <div className="pop-nav-box">
                <div className={`pop-nav-btn pop-prev ${isLeftDisabled ? 'unscrollable' : 'pop-nav-hover'}`}  
                onClick={prevImage}>
                    {<FaChevronLeft/>}
                </div>
                <div className={`pop-nav-btn pop-next ${isRightDisabled ? 'unscrollable' : 'pop-nav-hover'}`} 
                onClick={nextImage}>
                    {<FaChevronRight/>}
                </div>
            </div>
            <div className="pop-carousel-container">
                <h4 className='popular-title'>Popular Games Today</h4>
                <div className="pop-carousel-wrapper"
                    style={{ transform: `translateX(-${currentIndex * (cardWidth + gapWidth)}px)` }}>
                    <PopCard popGames={popGames} cardRef={cardRef}/>
                </div> {/* end pop-carousel*/}
            </div> {/* end pop-carousel-container*/}
        </div> {/* end pop-carousel-section*/}
    </>
    )
}

export default PopularCarousel