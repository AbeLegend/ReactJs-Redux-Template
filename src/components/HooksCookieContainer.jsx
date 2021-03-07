import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux";

const HooksCookieContainer = () => {
  const numOfCookies = useSelector((state) => state.numOfCookies);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cookies - {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>Buy Cookie</button>
    </div>
  );
};

export default HooksCookieContainer;
