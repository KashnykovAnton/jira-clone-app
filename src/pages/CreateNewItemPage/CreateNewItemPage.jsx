import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import { selectLoader } from "../../store/cards/cards-selectors";
import CardEdit from "../../components/CardEdit/CardEdit";
import CardSkeleton from "../../components/CardSkeleton";

const CreateNewItemPage = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <Container>
      <Title>Create new card</Title>
      {isLoading ? <CardSkeleton /> : <CardEdit creationMode={true} />}
    </Container>
  );
};

export default CreateNewItemPage;
