import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')


  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        Video Search
          <input type="text" onChange={(e) => { setTerm(e.target.value) }
        } />
      </form>
    </div>
  );

}

export default SearchBar;
