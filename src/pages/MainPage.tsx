import Header from '../components/Header/Header';
import Carousel from '../components/Main/Carousel';
import Sales from '../components/Main/Sales';
import '../assets/styles/globals.css';

function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <Carousel />
      <Sales />
    </div>
  );
}

export default MainPage;
