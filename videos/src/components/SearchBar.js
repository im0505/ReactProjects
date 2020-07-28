import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <input type="text" onChange={this.onInputChange} />
      </form>
    );
  }
}
export default SearchBar;
