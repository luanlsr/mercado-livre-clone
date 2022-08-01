import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import banner1 from '../../assets/images/banner1.webp';
import banner2 from '../../assets/images/banner2.webp';
import banner3 from '../../assets/images/banner3.webp';
import banner4 from '../../assets/images/banner4.webp';
import banner5 from '../../assets/images/banner5.webp';
import banner6 from '../../assets/images/banner6.webp';
import banner7 from '../../assets/images/banner7.webp';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles/Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        allowSlideNext={true}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={banner1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="banner4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="banner5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="banner6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner7} alt="banner7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
