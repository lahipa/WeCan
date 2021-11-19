import requestHttp from "./network";

// export const API_BACKEND = requestHttp(
//   process.env.API_BACKEND_URL,
//   "default",
//   "bearer"
// );asssss

export const API_BACKEND = requestHttp(
  "http://localhost:5500/api/v1",
  "default",
  "apikey",
);
