import { useEffect, useState } from 'react';
import arrowLeft from '../assets/arrow_left.svg';
import arrowRight from '../assets/arrow_right.svg';

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const prev = () => {
    if (current > 0) {
      // scroll to the previous product
      setCurrent(current - 1);
    } else {
      // if current index is 0, scroll to the end of list
      setCurrent(length - 4);
    }
  };

  const next = () => {
    if (current < length - 4) {
      // scroll to the next product
      setCurrent(current + 1);
    } else {
      // if current index is the last, scroll to beginning of list
      setCurrent(0);
    }
  };

  return (
    <>
      <button name="previous" className="left-arrow" onClick={prev}>
        <img src={arrowLeft} alt="previous" />
      </button>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${current * (100 / 4)}%)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <button name="next" className="right-arrow" onClick={next}>
        <img src={arrowRight} alt="next" />
      </button>
    </>
  );
};

export default Carousel;
