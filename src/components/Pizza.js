import React, { useEffect, useRef, useState } from "react";
import { Pagination, Stack, styled } from "@mui/material";
import Sceleton from "./Sceleton";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { filterSelector, setFilters, setPage } from "../slice";
import { list } from "./Sort";
// import { addItem, cartSelector } from "../slice/cartSlice";
import { fetchPizza } from "../slice/fetchSlice";
import PizzaList from "./PizzaList";

const Pizza = () => {
  const PIZZA = useSelector((state) => state.pizza.items);
  const { status } = useSelector((state) => state.pizza);
  const { categoryNum, sort, page, searchValue } = useSelector(filterSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMounted.current) {
      const quaryString = qs.stringify({
        categoryNum,
        sortProperty: sort.sortProperty,
        searchValue,
        page,
      });
      navigate(`?${quaryString}`);
    }
    isMounted.current = true;
  }, [categoryNum, sort.sortProperty, page, searchValue, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sorts = list.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sorts }));
      isSearch.current = true;
    }
  }, [categoryNum, sort.sortProperty, searchValue, page]);

  const fetchPizzas = () => {
    setIsLoading(false);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryNum > 0 ? `category=${categoryNum}` : "";
    dispatch(fetchPizza({ sortBy, order, category, searchValue, page }));
  };

  useEffect(() => {
    fetchPizzas();
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [categoryNum, sort.sortProperty, searchValue, page]);

  function pageHandler(e, value) {
    console.log(e);
    dispatch(setPage(e, value));
  }
  return (
    <>
      <h2 style={{ marginTop: "50px" }}>Все пиццы</h2>
      {status === "pending" || "fulfilled" || "rejected" ? (
        <h3>{status}</h3>
      ) : (
        ""
      )}
      <PizzaBlock>
        {!isLoading
          ? [...new Array(10)].map((_, index) => <Sceleton key={index} />)
          : // eslint-disable-next-line array-callback-return
            PIZZA?.map((el) => {
              // const findObj = PIZZASS?.find((obj) => obj.id === el.id);

              if (el.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                  <div key={el.id}>
                    {" "}
                    <PizzaList el={el} />
                  </div>
                );
              }
            })}
      </PizzaBlock>

      <StackStyled spacing={2}>
        <Pagination
          count={5}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={(value, e) => {
            pageHandler(e, value);
          }}
        />
      </StackStyled>
    </>
  );
};

export default Pizza;

const PizzaBlock = styled("div")({
  width: "1300px",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "-80px",

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

const StackStyled = styled(Stack)({
  alignItems: "center",
  padding: "50px",
});
