import { FormInputContainer, FormInputStyle, FormLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <FormLabel>{label}</FormLabel>
      <FormInputStyle {...otherProps} />
    </FormInputContainer>
  );
};

export default FormInput;
