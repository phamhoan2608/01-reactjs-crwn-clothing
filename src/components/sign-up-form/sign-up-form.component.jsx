import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log("formFields", formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      console.log("response", response);
    } catch (error) {
      console.log("user created encountered an error", error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />

        <label>Comfirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
