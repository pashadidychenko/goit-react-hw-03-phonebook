import React from "react";
// import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { FormControl } from "@material-ui/core/";
import { v4 as uuidv4 } from "uuid";

export class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInputValue = (el) => {
    const inputValue = el.target.dataset.type;
    this.setState({
      [inputValue]: el.target.value,
    });
  };

  handleSubmit = (el) => {
    el.preventDefault();
    const contact = {
      id: uuidv4(),
      ...this.state,
    };
    this.props.onFormSubmit(contact);
      this.setState({
      name: "",
      number: "",
     });
  };

  render() {
    return (
      <FormControl>
        <h3>Ім'я</h3>
        <input
          type="text"
          data-type="name"
          value={this.state.name}
          placeholder="Введіть Ваше Ім'я"
          onChange={this.handleInputValue}
        />
        <h3>Номер</h3>
        <input
          type="text"
          data-type="number"
          value={this.state.number}
          placeholder="Введіть Ваш номер"
          onChange={this.handleInputValue}
        />
        <br />
        <Box>
          <Button variant="outlined" type="submit" onClick={this.handleSubmit}>
            Додати контакт
          </Button>
        </Box>
      </FormControl>
    );
  }
}
