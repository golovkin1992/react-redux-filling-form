const DATE_SEPARATOR = '.';
const maskDate = (value) => {
  const v = value.replace(/\D/g, '').slice(0, 8);
  if (v.length >= 5) {
    return `${v.slice(0, 2)}${DATE_SEPARATOR}${v.slice(2, 4)}${DATE_SEPARATOR}${v.slice(4)}`;
  }
  if (v.length >= 3) {
    return `${v.slice(0, 2)}${DATE_SEPARATOR}${v.slice(2)}`;
  }
  return v;
};
export default maskDate;
