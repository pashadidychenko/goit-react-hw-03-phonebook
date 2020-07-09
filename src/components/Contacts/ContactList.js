import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <ContactListItem
          deleteContact={() => deleteContact(contact.id)}
          contact={contact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactList: PropTypes.array,
};
