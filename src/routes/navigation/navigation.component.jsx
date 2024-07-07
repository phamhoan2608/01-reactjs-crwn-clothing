import { Outlet } from "react-router-dom";
import { ReactComponent as Saffron } from "../../assets/saffron.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavLinksContainer, NavigationContainer, NavLink } from "./navigation.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../store/user/user.action.js";
import { URL_MAPPING } from "../../utils/constants.js";
import { setItemCart } from "../../store/cart/cart.action.js";
import { CART_INIT_STATE } from "../../store/cart/cart.reducer.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useSelector((state) => state.cart);

  const handleSignOut = () => {
    dispatch(signOutStart());
    // dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, []));
    dispatch(setItemCart(CART_INIT_STATE));
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Saffron className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={URL_MAPPING.SHOP}>SHOP</NavLink>
          {currentUser ? (
            <NavLink to={URL_MAPPING.SIGN_IN} onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={URL_MAPPING.SIGN_IN}>SIGN IN</NavLink>
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
