export const sendStoregData = (data) => {
  localStorage.setItem("storege", JSON.stringify(data));
};

export const getStoregData = () => {
  return JSON.parse(localStorage.getItem("storege"));
};
