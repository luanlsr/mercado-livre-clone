import Header from '../components/Header/Header';
import Carousel from '../components/Main/Carousel';
import Sales from '../components/Main/Sales';
import '../assets/styles/globals.css';
import Footer from '../components/Footer/Footex';
import Information from '../components/Footer/Informations';

function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <Carousel />
      <Sales />
      <Information />
      <Footer />
    </div>
  );
}

export default MainPage;
