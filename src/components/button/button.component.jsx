import { ButtonStyle } from "./button.styles";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <ButtonStyle className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
