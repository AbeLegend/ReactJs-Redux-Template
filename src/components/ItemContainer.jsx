import React from "react";
import { connect } from "react-redux";
import { buyCookie, buyPudding } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cookie
    ? state.cookie.numOfCookies
    : state.pudding.numOfPuddings;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cookie
    ? () => dispatch(buyCookie())
    : () => dispatch(buyPudding());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
