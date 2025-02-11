import React from "react";
import { useSelector } from "react-redux";
import { selectLoader } from "../../store/cards/cards-selectors";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import LoaderSpin from "../../components/LoaderSpin/LoaderSpin";
import Settings from "../../components/Settings";

const SettingsPage = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <Container>
      <Title>Settings</Title>
      {isLoading ? <LoaderSpin /> : <Settings />}
    </Container>
  );
};

export default SettingsPage;
