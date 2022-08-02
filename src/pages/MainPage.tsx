import Header from '../components/Header/Header';
import Carousel from '../components/Main/Carousel';
import Sales from '../components/Main/Sales';
import '../assets/styles/globals.css';
import Footer from '../components/Footer/Footex';
import Information from '../components/Footer/Informations';
import MoreInformation from '../components/Footer/MoreInformation';
import { useSelector } from '../redux/selector';

function MainPage() {
  const isHidden = useSelector(state => state.main.hidden);

  return (
    <div className="MainPage">
      <Header />
      <Carousel />
      <Sales />
      <Information />
      {isHidden && <MoreInformation />}
      <Footer />
    </div>
  );
}

export default MainPage;
