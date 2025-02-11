import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Board from '../../components/Board/Board';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { selectCards, selectLoader } from '../../store/cards/cards-selectors';
import { fetchAllCards } from '../../store/cards/cards-thunks';
import HomePageSceleton from './HomePageSkeleton';

const HomePage = () => {
  const isLoading = useSelector(selectLoader);
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      {!isLoading && cards.length > 0 && <Board />}
      {isLoading && <HomePageSceleton />}
    </Container>
  );
};

export default HomePage;
