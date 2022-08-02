import './styles/SaleCarousel.css';
import { carouselItems } from './carouselData';

const SaleCarousel = () => {
  const componentCarouselItems = carouselItems.map((item, index) => {
    return (
      <a href="#" key={index}>
        <div className="sales-carousel">
          <div className="img-casousel">
            <img src={`${item.image}`} alt="" />
          </div>
          <h3>{item.text}</h3>
        </div>
      </a>
    );
  });
  return (
    <div className="carousel-sales-container">{componentCarouselItems}</div>
  );
};

export default SaleCarousel;
