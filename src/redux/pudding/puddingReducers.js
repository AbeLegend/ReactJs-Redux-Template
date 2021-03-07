import { BUY_PUDDING } from './puddingTypes';

const initialState = {
  numOfPuddings: 20
}

const puddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PUDDING:
      return {
        ...state, numOfPuddings: state.numOfPuddings - 1
      }
    default: return state
  }
}

export default puddingReducer;