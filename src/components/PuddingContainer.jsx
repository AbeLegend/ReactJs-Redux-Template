import React from "react";
import { connect } from "react-redux";
import { buyPudding } from "../redux";

const PuddingContainer = (props) => {
  return (
    <div>
      <h2>Number of puddings - {props.numOfPuddings}</h2>
      <button onClick={props.buyPudding}>Buy Pudding</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPuddings: state.pudding.numOfPuddings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPudding: () => dispatch(buyPudding()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PuddingContainer);
