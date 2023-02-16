import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../logo.png";
import { MdShoppingCart } from "react-icons/md";
import "../stylesheets/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
        <img src={logo} alt="Mister Shoes" onClick={() => navigate("/")} />
        <Link to="/cart">
            <MdShoppingCart className="header__cart" size="2em"/>
        </Link>
    </header>
  )
}

export default Header