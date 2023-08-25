import React from "react";
import Navbar from "../components/Navbar";
import ListCountry from "../components/ListCountry";
import Pagination from "../components/Pagination";
import useDarkMode from "../hook/useDarkMode";
import useFetchData from "../hook/useFetchData";

function Homepage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const {
    filterOption,
    setFilterOption,
    searchText,
    setSearchText,
    currentItems,
    currentPage,
    totalPages,
    handlerPageChange,
  } = useFetchData();

  const countriesList = currentItems;
  // console.log(countriesList);

  return (
    <>
      <header
        className={`shadow-2xl ${
          darkMode
            ? `bg-darkmode-element-DarkBlue`
            : `bg-lightmode-background-Very-Light-Gray border-b-2`
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <section
        className={` min-h-screen ${
          darkMode
            ? `bg-darkmode-background-Very-Dark-Blue`
            : `bg-lightmode-background-Very-Light-Gray`
        }`}
      >
        <ListCountry
          darkMode={darkMode}
          countriesList={countriesList}
          filterOption={filterOption}
          setFilterOption={setFilterOption}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <Pagination
          handlerPageChange={handlerPageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </>
  );
}

export default Homepage;
