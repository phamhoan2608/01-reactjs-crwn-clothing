import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

import { AuthencationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthencationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthencationContainer>
  );
};

export default Authentication;
