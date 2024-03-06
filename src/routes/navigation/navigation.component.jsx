import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Saffron } from "../../assets/saffron.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavLinksContainer, NavigationContainer, NavLink } from "./navigation.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../store/user/user.action.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useSelector((state) => state.cart);

  console.log("current user", currentUser);
  const handleSignOut = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Saffron className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink to={"/signIn"} onClick={handleSignOut}>
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
