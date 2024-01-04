import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { LogoContainer, NavLinksContainer, NavigationContainer, NavLink } from './navigation.styles.jsx';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={'/shop'}>SHOP</NavLink>
          {currentUser ? (
            <NavLink to={'/signIn'} onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={'/signIn'}>SIGN IN</NavLink>
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
