import { RiShoppingCartLine } from 'react-icons/ri';
import { CgChevronDown } from 'react-icons/cg';
import { FaRegBell } from 'react-icons/fa';
import photo from '../../assets/images/luan-perfil.png';
import './styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <img
        className="logo-disney"
        src="https://http2.mlstatic.com/D_NQ_806934-MLA50801953236_072022-OO.webp"
        alt="banner disney"
      />
      <div className="account">
        <div className="perfil">
          <img className="photo-perfil" src={photo} alt="photo perfil" />
          <span className="item-perfil">Luan</span>
          <CgChevronDown className="item-perfil" />
        </div>
        <a className="shop item" href="">
          Compras
        </a>
        <a className="rate item" href="">
          Favoritas
          <CgChevronDown className="item-perfil" />
        </a>
        <FaRegBell className="notification-icon item" />
        <RiShoppingCartLine className="cart-icon item" />
      </div>
    </div>
  );
};

export default Menu;
