import ProductItem from './../../product-item';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductTypeList } from '../../../types';

import SwiperCore, { Autoplay } from 'swiper';


SwiperCore.use([Autoplay]);

let slidesPerView =0.5;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 500) {
    slidesPerView = 3;
    spaceBetween = 40;
    centeredSlides = false;
  }
  if(window.innerWidth > 200) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper  autoplay={{ delay: 5500 }} 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel