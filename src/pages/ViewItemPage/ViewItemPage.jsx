import CardView from "../../components/CardView/CardView";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectLoader } from "../../store/cards/cards-selectors";
import CardSkeleton from "../../components/CardSkeleton";
import { useEffect } from "react";
import { fetchCard } from "../../store/cards/cards-thunks";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";

const ViewItemPage = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchCard(cardId));
  }, [dispatch, cardId]);

  return (
    <Container>
      <Title>View card</Title>
      {isLoading ? <CardSkeleton /> : <CardView />}
    </Container>
  );
};

export default ViewItemPage;
