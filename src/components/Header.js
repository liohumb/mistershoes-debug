import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../logo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
        <img src={logo} alt="Mister Shoes" onClick={() => navigate("/")} />
    </header>
  )
}

export default Header