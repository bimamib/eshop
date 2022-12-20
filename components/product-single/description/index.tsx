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
          <h4>Detail dan deskripsi produk</h4>
          <p>T-shirt Summer Vibes Putih dalam garis uiKit dengan cetakan warna-warni. <br></br>Terbuat dari bahan katun jersey. T-shirt sangat cocok dengan jeans, celana atau celana pendek.</p>
        </div>
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Detail dan deskripsi produk</h4>
          <p>T-shirt Summer Vibes Putih dalam garis uiKit dengan cetakan warna-warni.<br></br>Terbuat dari bahan katun jersey. T-shirt sangat cocok dengan jeans, celana atau celana pendek.</p>
        </div>
      </section>
    );
  };
    
  export default Description;
      