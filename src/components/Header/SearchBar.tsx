import './styles/SearchBar.css';
import { FaSistrix } from 'react-icons/fa';
import logo from '../../assets/images/Mercado-Livre-logo.png';

const SearchBar = () => {
  return (
    <div className="all-header search-bar">
      <img className="logo-meli" src={logo} alt="logo-meli" />
      <form id="search-form" action="GET">
        <input
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
