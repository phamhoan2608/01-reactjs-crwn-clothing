import { Fragment } from "react";

import "./form-input.styles.css";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
