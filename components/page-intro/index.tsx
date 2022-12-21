import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

import 'swiper/css';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="coverflow" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/Makramee/banner1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2 >Sale of the summer collection</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/Makramee/banner10.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Menjual Berbagai Jenis Macrame</h2>
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
                <p>Untuk Minimal Pembelian 1 juta</p>
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
  )
};

export default PageIntro