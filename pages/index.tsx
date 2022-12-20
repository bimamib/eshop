import Layout from '../layouts/main';
import PageIntro from '../components/page-intro';
import Link from 'next/link';
import ProductsFeatured from './../components/products-featured/index';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';
const IndexPage = ()=> {
  return (
    <Layout>
      <PageIntro />
    <section className="featured">
      <div className="container">
        <article style={{ backgroundImage: 'url(/images/Makramee/15.jpg)' }} className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h3>Produk Baru!!!</h3>
            <a href="#" className="btn btn--rounded">Tampilkan Koleksi</a>
          </div>
        </article>

        <article style={{ backgroundImage: 'url(/images/Makramee/10.jpg)' }} className="featured-item featured-item-small-first">
          <div className="featured-item__content">
            <h3>Galaxy variant </h3>
            <a href="#" className="btn btn--rounded">Lihat LEbih Lanjut</a>
          </div>
        </article>

        <article style={{ backgroundImage: 'url(/images/Makramee/11.jpg)' }} className="featured-item featured-item-small">
          <div className="featured-item__content">
            <h3>Semua Promo</h3>
            <a href="#" className="btn btn--rounded">Lihat Produk</a>
          </div>
        </article>
      </div>
    </section><section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Gratis Ongkir</h4>
                <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pembayaran Mudah</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garansi Uang Kembali</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                  back for a full refund.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Kualitas Terbaik</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <ProductsFeatured /> */}
      <Subscribe />
      <Footer />
      </Layout>
      
  )
}

export default IndexPage
