import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="searchs">Search:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="article"
        list="articles"
        type="text"
        className="form-control"
        placeholder="Type in a search term"
        id="search"
      />
      <datalist id="search">
        {props.search.map(search => <option value={search} key={search} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;


