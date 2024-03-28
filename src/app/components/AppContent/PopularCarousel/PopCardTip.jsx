import '../../../../css/popularcarousel.css';
import { Tooltip } from 'react-tooltip';
import { TiArrowRightThick } from 'react-icons/ti';

const PopCardTip = ({ game }) => {
  return (
    <Tooltip id="discount-tip" place="top">
      <div className="tip-header">DISCOUNT BREAKDOWN</div>
      <div className="tip-content">
        <div className="store-discount-percent">
          <span className="deal">-${game.deal}% </span>
          STORE DISCOUNT
        </div>
        <div className="store-discount-amount">
          <span className="old-price">${game.price} </span>
          <span className="arrow-discount">
            <TiArrowRightThick />
          </span>
          {game.deal_price}
        </div>
      </div>
    </Tooltip>
  );
};

export default PopCardTip;
