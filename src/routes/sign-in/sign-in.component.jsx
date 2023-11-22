import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div className="container">
      {/* <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
      {/* 
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
            <button type="submit" className="sign-up-btn">
              Sign in
            </button>
            <button type="button" className="sign-up-btn">
              Sign in with Google
            </button>
          </div>
        </form>
      </div> */}
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Signin;
