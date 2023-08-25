import React from "react";
import Input from "./Input";
import Card from "./Card";

function ListCountry({
  darkMode,
  countriesList,
  filterOption,
  setFilterOption,
  setSearchText,
  searchText,
}) {
  return (
    <article>
      <Input
        darkMode={darkMode}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <div className="mt-6">
        <div
          id="grid"
          className="grid w-full grid-flow-row grid-cols-1 mx-auto gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl place-items-center"
        >
          {countriesList.map((item, index) => (
            <Card
              key={index}
              flags={item.flags.svg}
              name={item.name.common}
              population={item.population.toLocaleString("en-US")}
              region={item.region}
              capital={item.capital}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ListCountry;
