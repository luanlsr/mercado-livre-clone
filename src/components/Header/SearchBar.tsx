import './styles/SearchBar.css';
import logo from '../../assets/images/Mercado-Livre-logo.png';

const SearchBar = () => {
  return (
    <div className="all-header search-bar">
      <img className="logo-meli" src={logo} alt="logo-meli" />
      {/* https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png */}
    </div>
  );
};

export default SearchBar;
