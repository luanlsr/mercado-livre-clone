import SalesBanners from './SaleBanners';
import SaleCarousel from './SaleCarousel';
import './styles/Sales.css';

const Sales = () => {
  return (
    <article className="sales-container">
      <h2>NO DIA DOS PAIS DO MERCADO LIVRE VOCÊ APROVEITA MUITO! 💛</h2>
      <SaleCarousel />
      <SalesBanners />
    </article>
  );
};

export default Sales;
