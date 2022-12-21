import Link from 'next/link';
import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Me</span>-Shop</h6>
            <p>Website ini menyediakan berbagai jenis Macrame dan Dream Catcher yang dapat dibeli oleh pengunjung.
               Bisa juga menyertakan kategori berdasarkan jenis Macrame dan Dream Catcher, seperti Macrame ataupun 
               Dream Catcher untuk dekorasi rumah, Macrame, Dream Catcher untuk aksesoris, dll.</p>
            {/* <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul> */}
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Belanja Online</li>
              <li><Link href="#">Order Status</Link></li>
              <li><Link href="#">Pengantaran</Link></li>
              <li><Link href="#">Garansi Pengembalian</Link></li>
              <li><Link href="#">Opsi Pembayaran</Link></li>
            </ul>
            <ul>
              <li>Informasi</li>
              <li><Link href="#">Temukan Toko Terdekat</Link></li>
              <li><Link href="#">Produk Terbaru</Link></li>
              <li><Link href="#">Daftar Langganan</Link></li>
              <li><Link href="#">Kritik dan Saran</Link></li>
            </ul>
            <ul>
              <li>Kontak</li>
              <li><Link href="#">Meshop@gmail.com</Link></li>
              <li><Link href="#">Hotline: 02112345678</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY KELOMPOK 3 - ©</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer