import { styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, cartSelector } from "../slice/cartSlice";
import { useNavigate } from "react-router-dom";

function PizzaList({ el }) {
  console.log(el);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PIZZASS = useSelector(cartSelector);
  const [check, setCheck] = useState(0);
  const [count, setCount] = useState(0);
  const [cont, setCont] = useState(0);
  const findObj = PIZZASS?.find((obj) => obj.id === el.id);

  const typeName = ["тонкое", "традиционное"];

  function typeHandler(id) {
    setCheck(id);
  }
  function sizeHandler(index) {
    setCount(index);
  }
  function clickAddHandler({
    category,
    id,
    imageUrl,
    name,
    price,
    rating,
    // types,
    // sizes,
  }) {
    // let counter
    dispatch(
      addItem({
        category,
        id,
        imageUrl,
        // types: check,
        // sizes: count,
        name,
        price,
        rating,
      })
    );
    setCont(el.id);
  }

  function infoPizzaHandler(id) {
    navigate(`/info/${id}`);
  }

  return (
    <PizzaBlock>
      <div className="block">
        <img
          src={el.imageUrl}
          alt="block"
          el={el}
          onClick={() => {
            infoPizzaHandler(el.id);
          }}
        />
        <div>
          <h4>{el.name}</h4>
          <div className="info">
            {el.types.map((elem) => (
              <span
                key={el.id}
                className={elem === check ? "tog" : ""}
                onClick={() => typeHandler(elem)}
              >
                {" "}
                {typeName[elem]}
              </span>
            ))}{" "}
            <br />
            {el.sizes.map((elem) => (
              <Span
                key={el.id}
                className={elem === count ? "tog" : ""}
                onClick={() => sizeHandler(elem, el.id)}
              >
                {elem}sm
              </Span>
            ))}
          </div>
          <Price>
            <h3>от {el.price} руб</h3>
            <button
              key={el.id}
              className={el.id === cont ? "col" : ""}
              onClick={() => clickAddHandler(el)}
            >
              + добавить {findObj ? findObj.counter : 0}
            </button>
          </Price>
        </div>
      </div>
    </PizzaBlock>
  );
}

export default PizzaList;

const PizzaBlock = styled("div")({
  "& img": {
    width: "260px",
    height: "260px",
    marginTop: "50px",
    marginLeft: "60px",
  },
  "& h4": {
    marginLeft: "80px",
    padding: "20px",
  },
  ".info": {
    marginLeft: "80px",
    backgroundColor: "pink",
    padding: "20px",
  },
  ".tog": {
    backgroundColor: "grey",
    marginLeft: "10px",
  },
});

const Span = styled("span")({
  marginLeft: "10px",
});
const Price = styled("div")({
  display: "flex",
  marginLeft: "80px",
  marginTop: "20px",
  "& button": {
    borderColor: "orange",
    borderRadius: "20px",
    padding: "10px",
    marginLeft: "40px",
  },
  ".col": {
    backgroundColor: "orange",
  },
});
