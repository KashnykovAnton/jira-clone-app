import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../store/cards/cards-thunks";
import { selectLoader } from "../../store/cards/cards-selectors";
import CardSkeleton from "../../components/CardSkeleton";
import CardEdit from "../../components/CardEdit/CardEdit";
import Title from "../../components/Title/Title";

const EditItemPage = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchCard(cardId));
  }, [dispatch, cardId]);

  return (
    <Container>
      <Title>Edit card</Title>
      {isLoading ? <CardSkeleton /> : <CardEdit />}
    </Container>
  );
};

export default EditItemPage;
