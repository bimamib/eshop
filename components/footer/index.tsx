import Link from "next/link";
import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Me</span>-Shop
            </h6>
            <p className="text-justify">
              Website ini menyediakan berbagai jenis Macrame dan Dream Catcher
              yang dapat dibeli oleh pengunjung. Bisa juga menyertakan kategori
              berdasarkan jenis Macrame dan Dream Catcher, seperti Macrame
              ataupun Dream Catcher untuk dekorasi rumah, Macrame, Dream Catcher
              untuk aksesoris, dll.
            </p>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Belanja Online</li>
              <li>
                <Link href="#">Order Status</Link>
              </li>
              <li>
                <Link href="#">Pengantaran</Link>
              </li>
              <li>
                <Link href="#">Garansi Pengembalian</Link>
              </li>
              <li>
                <Link href="#">Opsi Pembayaran</Link>
              </li>
            </ul>
            <ul>
              <li>Informasi</li>
              <li>
                <Link href="#">Temukan Toko Terdekat</Link>
              </li>
              <li>
                <Link href="#">Produk Terbaru</Link>
              </li>
              <li>
                <Link href="#">Daftar Langganan</Link>
              </li>
              <li>
                <Link href="#">Kritik dan Saran</Link>
              </li>
            </ul>
            <ul>
              <li>Kontak</li>
              <li>
                <Link href="#">MeShop@uikit.com</Link>
              </li>
              <li>
                <Link href="#">Hotline: +62 131 138 138</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY KELOMPOK3.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
