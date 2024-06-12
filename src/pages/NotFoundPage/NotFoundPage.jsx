import Container from "../../components/Container/Container";
import StyledLink from "../../components/StyledLink/StyledLink";

function NotFoundPage() {
  return (
    <Container>
      <h2 style={{ marginTop: "48px", textAlign: "center" }}>Unfortunately this page doesn't exist! </h2>
      <StyledLink>Go to home</StyledLink>
    </Container>
  );
}

export default NotFoundPage;
