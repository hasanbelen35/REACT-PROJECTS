import React, { useState } from "react";
import { Container } from "reactstrap";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import Home from "../pages/Home";
import Badge from "@mui/material/Badge";
import "../componentsCSS/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDrawer } from "../redux/basketSlice";
export default function Header() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch()

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

    const {products} = useSelector((store) => store.baskets)
  return (
    <div>
      <Container id="header_container">
        <img
          id="header_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
          alt=""
        />
        <h4>
          <b>HASAN'S COMMERCE</b>
        </h4>
        <div id="header">
          <input type="text" placeholder="Search..." />
          {theme ? (
            <FaMoon onClick={changeTheme} className="header_icons" />
          ) : (
            <CiSun onClick={changeTheme} className="header_icons" />
          )}

          <Badge badgeContent={products.length} color="primary">
            <IoCartOutline onClick={() => dispatch(setDrawer())} className="header_icons" />
          </Badge>

          <FaHome className="home-icon" onClick={() => navigate("/")} />
        </div>
      </Container>
    </div>
  );
}
