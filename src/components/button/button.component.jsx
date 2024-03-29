const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  normal: "normal",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
