import React from "react";
import Cart from "./Cart";
import {useDispatch} from 'react-redux'
import {authActions} from '../store/authSlice'
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <button onClick={handleLogout} className="Logout-btn">Logout</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
