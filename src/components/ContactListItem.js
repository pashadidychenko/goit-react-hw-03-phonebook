import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li data-id={contact.id}>
      <h4>
        {contact.name}: {contact.number}
      </h4>
      <button type="button" onClick={deleteContact}>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.object,
};
