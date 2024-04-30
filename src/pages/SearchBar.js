import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (searchTerm.length) {
      navigate("/search/" + searchTerm);
    }
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
