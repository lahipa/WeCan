import ActionTypes from "./actionTypes";
import { getCampaigns } from "../../../services";

export const getDataCampigns = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_CAMPAIGN_REQUEST });

    try {
      const response = await getCampaigns();

      return dispatch({
        type: ActionTypes.GET_CAMPAIGN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: ActionTypes.GET_CAMPAIGN_FAILURE,
        payload: {
          data: null,
          message: err.message,
        },
      });
    }
  };
};
