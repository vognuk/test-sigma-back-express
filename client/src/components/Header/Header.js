import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as NavLinkRoute } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const Header = (props, setLoged) => {
  const [collapsed, setCollapsed] = useState(true);
  let isAuthenticated = useSelector((state) =>
    authSelectors.getIsAuthenticated(state)
  );

  const token = useSelector (({auth}) => auth.token);

  useEffect(() => {
  }, [isAuthenticated]);

  const dispatch = useDispatch();
  const toggleNavbar = () => setCollapsed(!collapsed);

  const onLogout = () => {
    dispatch(authOperations.logOut(token.token));
    // isAuthenticated = !isAuthenticated;
    toggleNavbar(); 
  }

  return (
    <div>
      <Navbar
        className="mx-3"
        color="faded"
        light
        isAuthenticated={isAuthenticated}
      >
        <NavbarBrand href="/" className="mr-auto">
          <FiHome color="faded" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {isAuthenticated ? (
              <NavItem>
                <NavLinkRoute
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={onLogout}
                  exact
                >
                  <NavLink>Logout</NavLink>
                </NavLinkRoute>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLinkRoute
                    style={{ textDecoration: "none" }}
                    to="/register"
                    exact
                  >
                    <NavLink onClick = {toggleNavbar}>Register</NavLink>
                  </NavLinkRoute>
                </NavItem>
                <NavItem>
                  <NavLinkRoute style={{ textDecoration: "none" }} to="/login">
                    <NavLink onClick = {toggleNavbar}>Login</NavLink>
                  </NavLinkRoute>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
