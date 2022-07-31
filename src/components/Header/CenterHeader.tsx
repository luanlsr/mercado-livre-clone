import Menu from './Menu';
import SearchBar from './SearchBar';
import './styles/CenterHeader.css';

const CenterHeader = () => {
  return (
    <nav className="center-header">
      <SearchBar />
      <Menu />
    </nav>
  );
};

export default CenterHeader;
