import { styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortSlice } from "../slice";

export const list = [
  { name: "популярности ASC", sortProperty: '-rating' },
  { name: "популярности DESC", sortProperty: 'rating' },
  { name: "цене ASC", sortProperty: "-price" },
  { name: "цене DESC", sortProperty: "price" },
  { name: "алфавиту ASC", sortProperty: "-name" },
  { name: "алфавиту DESC", sortProperty: "name" },
];
const Sort = () => {
  const {select}=useSelector((state)=>state.filter)
  const dispatch=useDispatch()
  const sortRef=useRef()
  const [open, setOpen] = useState(false);

console.log(sortRef);

  function setSelectItem(el,i) {
    setOpen(!open);
    dispatch(SortSlice({list:el,id:i}))
  }

  return (
    <div ref={sortRef}>
      <b>Сортировка по: </b>
      <span style={{ color: "orange" }} onClick={() => setOpen(!open)}>
        {list[select].name}
      </span>
      {open && (
        <div>
          <Ul>
            {list.map((el, i) => {
                console.log(el);
              return (
                <li
                  key={i}
                  className={
                    select === i ? "activ" : ""
                  }
                  onClick={() => setSelectItem(el,i)}
                >
                   {el.name}{el.sortProperty.includes('-') ? '':<hr/>}
                </li>
              );
            })}
          </Ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

const Ul = styled("ul")({
  position: "absolute",
  textAlign: "center",
  padding: "50px",
  marginTop: "30px",
  fontSize: "20px",
  marginLeft: "-150px",
  background: "green",
  width: "200px",
  height: "200px",
  listStyle: "none",
  ".activ": {
    color: "orange",
  },
});
