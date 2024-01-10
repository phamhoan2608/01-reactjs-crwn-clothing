import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Saffron } from "../../assets/saffron.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavLinksContainer, NavigationContainer, NavLink } from "./navigation.styles.jsx";
import { useSelector } from "react-redux";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useSelector((state) => state.cart);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Saffron className="logo" />
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
    </>
  );
};

export default Navigation;
