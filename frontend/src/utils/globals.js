/**
 *
 * @param {*} data
 * @param {*} limit
 *
 * Limit content text to show.
 *
 * return string with n char and ...
 *
 */
export const limitContentText = (data, limit) => {
  const content = data.length > limit ? `${data.substring(0, limit)} ...` : data;

  return content;
};

/**
 *
 * @param {*} data
 * @param {*} prefix
 *
 * Convert price integer into string devided by kilo with dot (.) and given prefix currency
 *
 * How to use -> convertToPrice(10000)
 * Result -> IDR 10.000
 *
 */
export const convertToPrice = (data = 0, prefix = "Rp") => {
  const price = `${prefix} ${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  return price;
};
