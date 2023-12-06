import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { LogoContainer, NavLinksContainer, NavigationContainer, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="modal">
        <NavigationContainer>
          <LogoContainer to={"/"}>
            <CrwnLogo className="logo" />
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to={"/shop"}>SHOP</NavLink>
            {currentUser ? (
              <NavLink to={"/signIn"} onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to={"/signIn"}>SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
