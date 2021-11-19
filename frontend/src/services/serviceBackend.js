import { API_BACKEND } from "./http";

export const getCampaigns = async () => {
  const endpoint = "/campaigns";

  const request = await API_BACKEND.get(endpoint);
  const response = request.data;

  return response;
};