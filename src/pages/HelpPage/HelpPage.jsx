import React from "react";
import { useSelector } from "react-redux";
import { selectLoader } from "../../store/cards/cards-selectors";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import LoaderSpin from "../../components/LoaderSpin/LoaderSpin";
import Help from "../../components/Help";

const HelpPage = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <Container>
      <Title>Help</Title>
      {isLoading ? <LoaderSpin /> : <Help />}
    </Container>
  );
};

export default HelpPage;
