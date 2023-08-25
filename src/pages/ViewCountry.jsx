import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Alpha3Countries from "../data/country.js";
import useDarkMode from "../hook/useDarkMode.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function ViewCountry() {
  const navigate = useNavigate();
  const params = useParams();
  const [countryView, SetCountryView] = useState([]);
  const alpha = Alpha3Countries;
  const { darkMode, setDarkMode } = useDarkMode();

  const getCountryView = async () => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${params.name}`
      );
      console.log("Result", result.data[0]);
      SetCountryView(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountryView();
  }, []);

  const convertCodeCountry = (code) => {
    const fullName = alpha.find((item) => item.alpha_3 === code);
    return fullName !== undefined ? fullName.name : "";
  };

  const handlerClickBorder = async (name) => {
    navigate("/" + name);
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      SetCountryView(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

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
      </header>{" "}
      <section
        className={` min-h-screen ${
          darkMode
            ? `bg-darkmode-background-Very-Dark-Blue`
            : `bg-lightmode-background-Very-Light-Gray`
        }`}
      >
        {Object.keys(countryView).length > 0 && (
          <article className="p-10">
            <div className="w-full mx-auto max-w-7xl">
              <button
                onClick={() => navigate("/")}
                className={`inline-flex items-center justify-center gap-3 px-6 py-2 ${
                  darkMode
                    ? `text-white bg-darkmode-element-DarkBlue shadow-black`
                    : `text-lightmode-text-Very-Dark-Blue shadow-lightmode-input-Dark-Gray`
                }  rounded-md shadow-md  `}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back</span>
              </button>
            </div>

            <div className="grid items-center justify-center grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-5 lg:p-10">
              <div className="w-full max-w-xl my-10 ">
                <img
                  src={countryView.flags.svg}
                  alt={countryView.name.common}
                />
              </div>
              <div
                className={`flex flex-col  mt-7 gap-7 text-ellipsis ${
                  darkMode ? `text-white` : `text-black`
                }`}
              >
                <h2 className="text-3xl font-extrabold">
                  {countryView.name.common}
                </h2>
                <div className="flex flex-col gap-7 lg:flex-row lg:justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-bold leading-7">
                      Native Name:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {Object.values(countryView.name.nativeName)[0].common}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Population:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {countryView.population.toLocaleString("en-US")}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Region:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {countryView.region}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Sub Region:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {countryView.subregion}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Capital:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {countryView.capital[0]}
                      </span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold leading-7">
                      Top Level Domain:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {countryView.tld[0]}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Currencies:
                      <span
                        className={`ml-2 font-light  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {Object.values(countryView.currencies)[0].name}
                      </span>
                    </p>
                    <p className="text-sm font-bold leading-7">
                      Languages:
                      <span
                        className={`ml-2 font-light text-ellipsis  ${
                          darkMode ? `text-slate-300` : ` text-black`
                        } `}
                      >
                        {Object.values(countryView.languages).toString()}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-lg font-bold leading-7">
                    Border Countries:
                  </p>
                  {countryView.borders !== undefined &&
                    countryView.borders.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handlerClickBorder(convertCodeCountry(item))
                        }
                        className={`px-2 py-1 mx-1 my-2 text-sm font-light shadow-md     ${
                          darkMode
                            ? `text-slate-300 bg-darkmode-element-DarkBlue shadow-black`
                            : ` text-lightmode-text-Very-Dark-Blue bg-lightmode-background-Very-Light-Gray shadow-lightmode-input-Dark-Gray`
                        }`}
                      >
                        {convertCodeCountry(item)}{" "}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </article>
        )}
      </section>
    </>
  );
}

export default ViewCountry;
