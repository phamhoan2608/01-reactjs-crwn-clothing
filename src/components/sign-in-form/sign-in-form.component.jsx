import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.css";

const SignInForm = () => {
  return (
    <div className="sign-in-block">
      <h1>I already have an account</h1>
      <h3>Sign in with your email and password</h3>
      <form onSubmit={() => {}} className="sign-up-form">
        <FormInput label="Email" type="text" isRequired={true} onChange={() => {}} name="email-sign-in" value={""} />

        <FormInput
          label="Password"
          type="password"
          isRequired={true}
          onChange={() => {}}
          name="password-sign-in"
          value={""}
        />
        <div className="sign-in-btns">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google">
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
