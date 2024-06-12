import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { warningMessage } from "../../services/toasts";
import LoaderSpin from "../../components/LoaderSpin/LoaderSpin";
import CardView from "../../components/CardView/CardView";
import StyledLink from "../../components/StyledLink/StyledLink";
import deleteConfirmation from "../../helpers/deleteConfirmation";
import Container from "../../components/Container/Container";
import FormComponent from "../../components/FormComponent/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, fetchCard } from "../../store/cards/cards-thunks";
import { selectLoader, selectSingleCard } from "../../store/cards/cards-selectors";
import CardViewSkeleton from "../../components/CardView/CardViewSkeleton";

const EditItemPage = () => {
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);

  const { cardId } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const card = useSelector(selectSingleCard);

  useEffect(() => {
    dispatch(fetchCard(cardId));
  }, [dispatch, cardId]);

  const handleDeleteCard = () => {
    dispatch(deleteCard(cardId));
    warningMessage("Card was deleted");
    setDeleted(true);
  };

  const handleEditCard = () => {
    setEdited(true);
  };

  const initialValues = {
    id: card.id,
    name: card.name,
    description: card.description,
    group: { value: card.group, label: card.group },
    importance: { value: card.importance, label: card.importance },
    status: { value: card.status, label: card.status },
  };
  
  if (isLoading) {
    return (
      <Container>
        <CardViewSkeleton />
        <StyledLink>Go back to Home page</StyledLink>
        <LoaderSpin />
      </Container>
    );
  }

  // Go to the home page after deletion the card!

  return (
    <Container>
      {deleted ? (
        <CardView />
      ) : edited ? (
        <FormComponent initialValues={initialValues} edited={setEdited} inEditMode={true} />
      ) : (
        <CardView
          card={card}
          onDeleteClick={() => {
            deleteConfirmation(handleDeleteCard);
          }}
          onEditClick={handleEditCard}
        />
      )}
      {!edited && <StyledLink>Go back to Home page</StyledLink>}
    </Container>
  );
};

export default EditItemPage;
