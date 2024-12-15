import Layout from "../layouts/main";
import Footer from "../components/footer";
const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="site-footer__description">
          <br />
          <p className="text-justify">
            Kami adalah toko online pertama yang menjual berbagai produk
            kerajinan macrame dengan kualitas terbaik. Kami menawarkan berbagai
            pilihan motif dan model yang dapat disesuaikan dengan kebutuhan
            Anda. Selain itu tim kami terdiri dari para ahli dan pecinta
            kerajinan macrame yang telah banyak melakukan riset dan
            mengembangkan berbagai teknik untuk menghasilkan produk berkualitas
            tinggi. Kami selalu berusaha untuk meningkatkan kualitas produk dan
            pelayanan kami agar dapat memberikan kepuasan kepada pelanggan kami.
            Bergabunglah bersama kami dan dapatkan produk kerajinan macrame
            terbaik yang dapat menghiasi rumah Anda. Kami akan senang untuk
            menjadi bagian dari kebahagiaan Anda dengan menyediakan
            produk-produk yang sesuai dengan kebutuhan dan selera Anda.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
