import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Input({
  darkMode,
  filterOption,
  setFilterOption,
  setSearchText,
  searchText,
}) {
  return (
    <div className="flex items-center justify-between w-full p-10 mx-auto max-w-7xl">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a country..."
          className={`w-full p-4 pl-20  rounded-md   ${
            darkMode
              ? `text-white placeholder:text-white bg-darkmode-element-DarkBlue`
              : `text-lightmode-input-Dark-Gray shadow-lg`
          }`}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={`absolute  translate-y-1/2 w-7 h-7 left-6  ${
            darkMode ? `text-white` : `text-lightmode-input-Dark-Gray`
          }`}
        />
      </div>
      <div>
        <select
          name="regionFilter"
          id="regionFilter"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          className={`px-4 py-4  rounded-md  ${
            darkMode
              ? `text-white bg-darkmode-element-DarkBlue`
              : `text-lightmode-input-Dark-Gray shadow-lg`
          } `}
        >
          <option value=""> Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
