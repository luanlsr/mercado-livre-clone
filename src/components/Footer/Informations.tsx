import { BsChevronUp } from 'react-icons/bs';
import './style/Information.css';

function Information() {
  return (
    <div className="information">
      <button className="btn-more-information">
        Mais informações
        <BsChevronUp className="arrow-icon" />
      </button>
      <div className="hidden-menu">
        <div>
          <p>Sobre o</p>
          <ul></ul>
        </div>
        <div>
          <p>Outros sites</p>
          <ul></ul>
        </div>
        <div>
          <p>Contato</p>
          <ul></ul>
        </div>
        <div>
          <p>Redes sociais</p>
          <ul></ul>
        </div>
        <div>
          <p>Minha conta</p>
          <ul></ul>
        </div>
        <div>
          <p>Mercado pontos</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default Information;
