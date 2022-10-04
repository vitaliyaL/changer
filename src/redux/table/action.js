import axios from "axios";
export const actionTypes = {
  SET_TABLE: "SET_TABLE",
  SET_TABLE_SUCCESS: "SET_TABLE_SUCCESS",
  SET_TABLE_ERROR: "SET_TABLE_ERROR",
};
export const actionTable = {
  getTable: () => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.SET_TABLE });
      axios
        .get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD"
    )
        .then((res) => {
          dispatch({
            type: actionTypes.SET_TABLE_SUCCESS,
            payload: res.data.Data,
          });
        })
        .catch((err) => {
          console.log(err.response, err);
          dispatch({
            type: actionTypes.SET_TABLE_ERROR,
            payload: "Not found",
          });
        });
    };
  },
};
