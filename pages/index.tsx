import Layout from '../layouts/main';
import PageIntro from '../components/page-intro';
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
            <a href="/products" className="btn btn--rounded">Tampilkan Koleksi</a>
          </div>
        </article>

        <article style={{ backgroundImage: 'url(/images/Makramee/10.jpg)' }} className="featured-item featured-item-small-first">
          <div className="featured-item__content">
            <h3>Varian Galaksi</h3>
            <a href="/products" className="btn btn--rounded">Lihat Lebih Lanjut</a>
          </div>
        </article>

        <article style={{ backgroundImage: 'url(/images/Makramee/11.jpg)' }} className="featured-item featured-item-small">
          <div className="featured-item__content">
            <h3>Semua Promo</h3>
            <a href="/products" className="btn btn--rounded">Lihat Produk</a>
          </div>
        </article>
      </div>
    </section><section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Mengapa Anda harus belanja disini?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Gratis Ongkir</h4>
                <p>Setiap pembelian diatas Rp500.000 Anda mendapatkan gratis ongkir.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pembayaran Mudah</h4>
                <p>Semua metode pembayaran diproses secara instan dan aman.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garansi Uang Kembali</h4>
                <p>Jika Produk yang anda terima mengalami kerusakan, Anda berhak mendapatkan garansi
                  uang kembali.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Kualitas Terbaik</h4>
                <p>Dirancang agar bisa bertahan lama, setiap produk yang kami buat menggunakan bahan terbaik.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
      </Layout>
      
  )
}

export default IndexPage
