import './styles/SearchBar.css';
import { FaSistrix } from 'react-icons/fa';
import logo from '../../assets/images/Mercado-Livre-logo.png';
import { useEffect, useState } from 'react';
import { api } from '../../data/api/api';

const SearchBar = () => {
  const [products, setProdutcs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const searchProducts = async () => {
      const result = await api(
        `https://api.mercadolibre.com/sites/MLA/search?q=carro`,
        'GET',
      );
      setProdutcs(result);
    };
    searchProducts().catch(console.error);
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="all-header search-bar">
      <img className="logo-meli" src={logo} alt="logo-meli" />
      <form id="search-form" action="GET">
        <input
          value={searchValue}
          onChange={handleChange}
          className="search-input"
          type="text"
          placeholder="Buscar produtos, marcas e muito mais..."
        />
        <button className="search-btn">
          <FaSistrix className="search-icon" />
        </button>
      </form>
      <img
        className="logo-disney"
        src="https://http2.mlstatic.com/D_NQ_806934-MLA50801953236_072022-OO.webp"
        alt=""
      />
    </div>
  );
};

export default SearchBar;
