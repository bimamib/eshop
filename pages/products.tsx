import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import Layout from '../layouts/main';
import ProductsContent from './../components/products-content/index';


const Products = () => (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          {/* <ProductsFilter /> */}
          <ProductsContent />
        </div>
      </section>
      <Footer />
    </Layout>
  )
    
export default Products;