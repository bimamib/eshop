type ProductDescriptionType = {
    show: boolean;
  }
  
  const Description = ({ show }: ProductDescriptionType) => {
    const style = {
      display: show ? 'flex' : 'none',
    }
  
    return (
      <section style={style} className="product-single__description">
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Detail dan Deskripsi Produk</h4>
          <p>Macrame dengan berbagai jenis yang dapat mempercantik hiasan rumah. <br></br>Terbuat dari benang yang kuat. Macrame sangat cocok dijadikan hiasan rumah.</p>
        </div>
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Detail dan Deskripsi Produk</h4>
          <p>Macrame dengan berbagai jenis yang dapat mempercantik hiasan rumah.<br></br>Terbuat dari benang yang kuat. Macrame sangat cocok dijadikan hiasan rumah.</p>
        </div>
      </section>
    );
  };
    
  export default Description;
      