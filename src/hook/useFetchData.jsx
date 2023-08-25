import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetchData() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  const [searchText, setSearchText] = useState("");
  const countriesList = countryFilter.length > 0 ? countryFilter : countries;
  //   Do Pagination
  const itemPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  // เอาข้อมูลนี้ไป MAP
  const currentItems = countriesList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(countriesList.length / itemPerPage);
  console.log(currentPage);
  const handlerPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
    setCurrentPage(1);
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
  return {
    countries,
    setCountries,
    countryFilter,
    setCountryFilter,
    filterOption,
    setFilterOption,
    searchText,
    setSearchText,
    getCountry,
    filterByRegion,
    filterBySearch,
    currentPage,
    totalPages,
    handlerPageChange,
    currentItems,
  };
}

export default useFetchData;
