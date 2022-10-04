import { actionTypes } from "./action";
import { array_coins } from "../../constants/array_coins";
const initialState = {
  table: [],
  success: false,
  loading: false,
  error: false,
};
export const reducerTable = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TABLE:
      return {
        ...state,
        table: [],
        success: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_TABLE_SUCCESS:
      const newCoins = [];
      array_coins.map((i) => {
        newCoins.push(payload.filter((j) => j.CoinInfo?.Name === i)[0]);
      });
      return {
        ...state,
        table: newCoins,
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_TABLE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
