import './styles/SearchBar.css';
import { FaSistrix } from 'react-icons/fa';
import logo from '../../assets/images/Mercado-Livre-logo.png';
import { useEffect, useState } from 'react';
import { api } from '../../data/api/api';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/slices/productSlice';

const SearchBar = () => {
  const [products, setProdutcs] = useState([]);
  const dispatch = useDispatch();

  console.log(
    '🚀 ~ file: SearchBar.tsx ~ line 9 ~ SearchBar ~ products',
    products,
  );

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  const [searchValue, setSearchValue] = useState('');

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const searchProducts = async () => {
      const result = await api(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`,
        'GET',
      );
      setProdutcs(result);
    };
    searchProducts().catch(console.error);
  };
  // useEffect(() => {
  //   const searchProducts = async () => {
  //     const result = await api(
  //       `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`,
  //       'GET',
  //     );
  //     setProdutcs(result);
  //   };
  //   searchProducts().catch(console.error);
  // }, [searchValue]);

  return (
    <div className="all-header search-bar">
      <img className="logo-meli" src={logo} alt="logo-meli" />
      <form id="search-form" onSubmit={handleClick}>
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
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
