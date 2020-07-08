import React from "react";
import MainTitle from "./components/title/MainTitle";
import ContactTitle from "./components/title/ContactTitle";
import ContactList from "./components/ContactList";
import Container from "@material-ui/core/Container";
import { AddContact } from "./components/AddContacts/AddContact";
import FindContact from "./components/FindContact";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

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
