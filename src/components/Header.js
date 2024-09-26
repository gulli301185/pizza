import React from "react";
import Logo from "./../assets/logo.png";
import Bircle from "./../assets/bicle.svg";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

const Header = () => {
  const {totalCount,totalPrice}=useSelector(state=>state.cart)

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Container>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "38px", height: "38px" }}
            />
            <div>
              <h5>REACT PIZZA</h5>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </Container>
        </Link>
          <Search />
        <Bascet>
          <Link to="/cart">
            <span>{totalPrice} руб | </span>
            {"  "}
            <img src={Bircle} alt="bircle" /> <span>{totalCount}</span>
          </Link>
        </Bascet>
      </HeaderContainer>
    </>
  );
};

export default Header;

const Container = styled("div")({
  width: "311px",
  height: "51px",
  display: "flex",
  "& p": {
    color: "D9D9D9",
    fontSize: "12px",
  },
  "& div": {
    marginLeft: "15px",
  },
});

const Bascet = styled("div")({
  width: "130px",
  padding: "15px",
  backgroundColor: "darkOrange",
  borderRadius: "30px",
  textAlign: "center",
  color: "white",
});
const HeaderContainer = styled("div")({
  width: "1340px",
  display: "flex",
  justifyContent: "space-between",
 
});


