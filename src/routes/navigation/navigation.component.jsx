import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="modal">
        <div className="navigation">
          <Link className="logo-container" to={"/"}>
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to={"/shop"}>
              SHOP
            </Link>
            {currentUser ? (
              <Link className="nav-link" to={"/signIn"} onClick={signOutUser}>
                SIGN OUT
              </Link>
            ) : (
              <Link className="nav-link" to={"/signIn"}>
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
