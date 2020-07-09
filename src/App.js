import React from "react";
import MainTitle from "./components/Title/MainTitle";
import ContactTitle from "./components/Title/ContactTitle";
import ContactList from "./components/Contacts/ContactList";
import Container from "@material-ui/core/Container";
import { AddContact } from "./components/Contacts/WorksWithContact/AddContact";
import FindContact from "./components/Contacts/WorksWithContact/FindContact";
import {
  sendStoregData,
  getStoregData,
} from "./components/Services/LocalStoreg.js";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  async componentDidMount() {
    this.setState({ contacts: getStoregData() });
  }

  componentDidUpdate() {
    sendStoregData(this.state.contacts);
  }

  addContacts = (contact) => {
    if (
      this.state.contacts.find(
        (el) => el.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert("Контакт з таким іменем вже існує");
    } else {
      this.setState((prevState) => ({
        contacts: prevState.contacts.concat([contact]),
      }));
    }
  };

  filterContact = (e) => {
    let ele = e.target.value;
    this.setState({ filter: ele });
  };

  filteredContact = () => {
    if (this.state.filter) {
      return this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <MainTitle />
        <AddContact onFormSubmit={this.addContacts} />
        <ContactTitle />
        <FindContact filterContact={this.filterContact} />
        <ContactList
          contactList={this.filteredContact()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;

App.propTypes = {};
