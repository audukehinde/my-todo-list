const getFromLocalSTorage = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  JSON.parse(localStorage.getItem('todos')) || [];

export default getFromLocalSTorage;
