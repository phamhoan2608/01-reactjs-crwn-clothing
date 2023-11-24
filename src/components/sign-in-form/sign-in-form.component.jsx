import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithEmailPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.contenxt";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailPassword(email, password);
      resetFormFields();
      if (response) {
        navigate("/");
      }
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("Password is not correct!!!");
      }
      console.log("Have error with sign in", error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      // const userDocRef = await createUserDocumentFromAuth(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        alert("No user is choosen");
      }
    }
  };

  return (
    <div className="sign-in-block">
      <h1>I already have an account</h1>
      <h3>Sign in with your email and password</h3>
      <form onSubmit={onSubmit} className="sign-up-form">
        <FormInput label="Email" type="text" required onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

        <div className="sign-in-btns">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
