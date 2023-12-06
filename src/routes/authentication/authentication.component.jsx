import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.component.jsx";
import { Container } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <Container>
      <SignInForm />
      <SignUpForm />
    </Container>
  );
};

export default Authentication;
