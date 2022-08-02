import { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setHidden } from '../../redux/slices/mainSlice';
import './style/Information.css';

function Information() {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    dispatch(setHidden(isHidden));
  }, [dispatch, isHidden]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="information">
      <button onClick={handleClick} className="btn-more-information">
        Mais informações
        <BsChevronUp className="arrow-icon" />
      </button>
    </div>
  );
}

export default Information;
