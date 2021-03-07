import React from "react";
import { connect } from "react-redux";
import { buyCookie } from "../redux";

const CookieContainer = (props) => {
  return (
    <div>
      <h2>Number of cookies - {props.numOfCookies}</h2>
      <button onClick={props.buyCookie}>Buy Cookie</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCookies: state.numOfCookies,
    coba: "hai",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCookie: () => dispatch(buyCookie()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);
