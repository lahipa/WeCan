import ActionTypes from "../actions/campaigns/actionTypes";

const initialState = {
  campaigns: [],
  shorting: "", // donation-goal, days-left
};

const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: action.payload,
      };
    case "SHORTING_CAMPAIGN":
      return {
        ...state,
        shorting: action.shorting,
      };
    case "CLEAR_CAMPAIGN":
      return {
        ...state,
        campaigns: [],
      };
    default:
      return state;
  }
};

export default campaignsReducer;
