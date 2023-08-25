import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ListCountry from "../components/ListCountry";
import useDarkMode from "../hook/useDarkMode";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  const [searchText, setSearchText] = useState("");
  const countriesList = countryFilter.length > 0 ? countryFilter : countries;
  const { darkMode, setDarkMode } = useDarkMode();

  const getCountry = async () => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/independent?status=true`
      );
      setCountries(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountry();
  }, []);

  const filterByRegion = () => {
    const newList = countries.filter((item) => item.region === filterOption);
    setCountryFilter(newList);
  };

  useEffect(() => {
    filterByRegion();
  }, [filterOption]);

  const filterBySearch = () => {
    const newList = countries.filter(
      (item) =>
        item.name.common
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        item.name.official
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
    setCountryFilter(newList);
  };

  useEffect(() => {
    filterBySearch();
  }, [searchText]);

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
      </section>
    </>
  );
}

export default Homepage;
