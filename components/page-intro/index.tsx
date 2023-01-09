import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay } from 'swiper';

import 'swiper/css';
import Image from 'next/image';

SwiperCore.use([ Navigation,Autoplay]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="creative" className="swiper-wrapper" autoplay={{ delay: 3000 }} >
        <SwiperSlide>
          <div className="page-intro__slide">
            <Image src={'/images/Makramee/banner10.jpg'} alt={''} layout="fill"/>
            <div className="container">
              <div className="page-intro__slide__content">
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="page-intro__slide">
            <Image src={'/images/Makramee/banner14.jpg'}alt={''} layout="fill"/>
            <div className="container">
              <div className="page-intro__slide__content">
                <a href="#" className="btn-shop"><i className="icon-right"></i>Belanja sekarang</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="page-intro__slide">
            <Image src={'/images/Makramee/banner11.jpg'} alt={''} layout="fill"/>
            <div className="container">
              <div className="page-intro__slide__content">
                <a href="#" className="btn-shop"><i className="icon-right"></i>Belanja sekarang</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Gratis Ongkir</h4>
                <p>Untuk Minimal Pembelian Rp500.000</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>100% Pelanggan Puas</h4>
                <p>Pendapat Testimoni Dari Berbagai Pelanggan</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Dijamin Original</h4>
                <p>Garansi 30 Hari Untuk Setiap Produk Dari Toko Kami</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro