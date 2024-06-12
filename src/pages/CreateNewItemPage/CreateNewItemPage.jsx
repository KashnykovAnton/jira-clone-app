import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import FormComponent from "../../components/FormComponent/FormComponent";
import StyledLink from "../../components/StyledLink/StyledLink";
import Title from "../../components/Title/Title";
import { selectLoader } from "../../store/cards/cards-selectors";
import FormComponentSkeleton from "../../components/FormComponent/FormComponentSkeleton";

const CreateNewItemPage = () => {
  const isLoading = useSelector(selectLoader);
  console.log(isLoading);
  return (
    <Container>
      <Title>Create new item</Title>
      {isLoading ? <FormComponentSkeleton /> : <FormComponent />}
      <StyledLink>Go back to Home page</StyledLink>
    </Container>
  );
};

export default CreateNewItemPage;
