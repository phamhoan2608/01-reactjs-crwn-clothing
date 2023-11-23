import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.component.jsx";

const Authentication = () => {
  return (
    <div className="container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
