import { ADD_TO_CART } from "../Constans";

const intialState = {
  cardData: []
};

const CardItem = (state = intialState,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer",action);
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

export default CardItem;
