import { ADD_TO_CART } from "../Constans";

const intialState = {
  cardData: []
};

export default cardItme = (state = intialState,action) => {
  switch (action) {
    case ADD_TO_CART:
        return {
            ...state,
            cardData : action.data
        }
      break;

    default:
        return state
      break;
  }
};
