import React from "react";

const FindContact = ({ filterContact }) => {
  return (
    <>
      <h3>Введіть ім'я для пошуку</h3>
      <input type="text" onChange={filterContact} />
    </>
  );
};

export default FindContact;
