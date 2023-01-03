import Image from "next/legacy/image";

const Subscribe = () => {
    return (
      <section className="subscribe">
        <div className="container">
          <div className="subscribe__content">
            
          <Image src={'/images/Makramee/Banner9.jpg'} alt={''} layout="fill"/>
            <h4>Segera Berlangganan untuk mendapatkan Hadiah dan Promo menarik lainnya pada setiap Minggu Ceria</h4>
            <form className="subscribe__form">
              <input type="email" placeholder="Email address" />
              <button type="submit" className="btn btn--rounded btn--yellow">Berlangganan</button>
            </form>
          </div>
        </div>
      </section>
    )
  };
  
  
  export default Subscribe