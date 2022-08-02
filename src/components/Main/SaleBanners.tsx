import bannerSale1 from '../../assets/images/salebanner1.webp';
import bannerSale2 from '../../assets/images/salebanner2.webp';
import bannerFlamengo from '../../assets/images/salebannerflamengo.webp';
import './styles/SaleBanners.css';

const SalesBanners = () => {
  return (
    <section>
      <article className="salesBanners-container">
        <h2>OPÇÕES ESPECIAIS PRA PRESENTEAR SEU PAI ❤️</h2>
        <div className="sale-fathers">
          <a href="#">
            <img
              src={bannerSale1}
              alt="banner-father-sales"
              className="banner-father-sales"
            />
          </a>
          <a href="#">
            <img
              src={bannerSale2}
              alt="banner-father-sales"
              className="banner-father-sales"
            />
          </a>
        </div>
      </article>
      <article className="article-flamengo">
        <h2>OFERTAS PRA TODA NAÇÃO RUBRO-NEGRA ❤️</h2>
        <div className="sale-flamengo">
          <a href="#">
            <img
              src={bannerFlamengo}
              alt="banner-flamengo"
              className="banner-flamengo"
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default SalesBanners;
