import React from "react";
import { useSelector } from "react-redux";
import { selectLoader } from "../../store/cards/cards-selectors";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import LoaderSpin from "../../components/LoaderSpin/LoaderSpin";
import BacklogList from "../../components/BacklogList";

const BacklogPage = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <Container>
      <Title>Backlog</Title>
      {isLoading ? <LoaderSpin /> : <BacklogList />}
    </Container>
  );
};

export default BacklogPage;
