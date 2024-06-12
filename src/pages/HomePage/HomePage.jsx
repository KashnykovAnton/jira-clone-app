import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import Container from "../../components/Container/Container";
import { fetchAllCards } from "../../store/cards/cards-thunks";
import { selectCards, selectFilteredAndSortedCards, selectLoader } from "../../store/cards/cards-selectors";
import HomePageSceleton from "./HomePageSkeleton";

const HomePage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const isLoading = useSelector(selectLoader);
  const filteredAndSortedCards = useSelector(selectFilteredAndSortedCards);

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      {!isLoading && cards.length > 0 && <Board cards={filteredAndSortedCards} />}
      {isLoading && <HomePageSceleton />}
    </Container>
  );
};

export default HomePage;
