import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/" + props.name)}
      className={`rounded-lg shadow-xl w-60 cursor-pointer transition-all ease-in-out hover:scale-110  ${
        props.darkMode ? `bg-darkmode-element-DarkBlue` : `bg-white`
      } `}
    >
      <div>
        <img
          src={props.flags}
          alt={props.name}
          className="object-cover w-full h-32 rounded-t-lg"
        />
      </div>
      <div
        className={`p-6 mb-4  ${
          props.darkMode ? `text-white` : `text-lightmode-text-Very-Dark-Blue`
        } `}
      >
        <h2 className="mb-3 text-sm font-bold">{props.name}</h2>
        <p className="text-xs font-bold leading-5">
          Population:{" "}
          <span
            className={`${
              props.darkMode
                ? `text-lightmode-input-Dark-Gray`
                : ` text-darkmode-element-DarkBlue font-light`
            } text-lightmode-input-Dark-Gray`}
          >
            {props.population}
          </span>
        </p>
        <p className="text-xs font-bold leading-5">
          Region:{" "}
          <span
            className={`${
              props.darkMode
                ? `text-lightmode-input-Dark-Gray`
                : ` text-darkmode-element-DarkBlue font-light`
            } text-lightmode-input-Dark-Gray`}
          >
            {props.region}
          </span>
        </p>
        <p className="text-xs font-bold leading-5">
          Capital:{" "}
          <span
            className={`${
              props.darkMode
                ? `text-lightmode-input-Dark-Gray`
                : ` text-darkmode-element-DarkBlue font-light`
            } text-lightmode-input-Dark-Gray`}
          >
            {props.capital[0]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
