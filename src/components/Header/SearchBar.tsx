import './styles/SearchBar.css';
import { FaSistrix } from 'react-icons/fa';
import logo from '../../assets/images/Mercado-Livre-logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { CgChevronDown } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { api } from '../../data/api/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts, setSearch } from '../../redux/slices/productSlice';

const SearchBar = () => {
  // const [products, setProdutcs] = useState({});
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {}, [dispatch, products]);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const searchProducts = async () => {
      const result = await api(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`,
        'GET',
      );
      dispatch(setProducts(result));
      dispatch(setSearch(searchValue));
      navigate('/products');
    };
    searchProducts().catch(console.error);
  };

  return (
    <div className="all-header">
      <div className="search-bar">
        <img
          onClick={() => navigate('/')}
          className="logo-meli"
          src={logo}
          alt="logo-meli"
        />
        <form id="search-form" onSubmit={handleClick}>
          <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={e => setSearchValue(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button className="search-btn">
            <FaSistrix className="search-icon" />
          </button>
        </form>
      </div>
      <ul className="menu-list">
        <li className="address-container">
          <IoLocationOutline className="localization-icon" />
          <div className="address">
            <span>Enviar para LUAN</span>
            <p>Rua São Gonçalo 57</p>
          </div>
        </li>
        <li>
          Categorias
          <CgChevronDown />
        </li>
        <li>Ofertas do dia</li>
        <li>Histórico</li>
        <li>Moda</li>
        <li>Vender</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default SearchBar;
