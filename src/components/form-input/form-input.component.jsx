import { FormInputContainer, FormLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <FormLabel>{label}</FormLabel>
      <FormInput {...otherProps} />
    </FormInputContainer>
  );
};

export default FormInput;
