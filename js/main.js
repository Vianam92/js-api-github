"use strict";

let users = [];

const getValueInput = () => {
  const inputElement = document.querySelector(".js-input");
  const input = inputElement.value;
  return input;
};

//handler
const handlerClick = (eve) => {
  eve.preventDefault();
  console.log("click");
  fetch(`https://api.github.com/users/${getValueInput()}`)
    .then((response) => response.json())
    .then((data) => {
      users = data;
      paintResultList();
    });
};

//paint list
const paintResultList = () => {
  const ulElement = document.querySelector(".js-ul");
  ulElement.textContent = "";
  const search = users.name.split(" ");
  const searchLength = search[0].split("");
  for (let i = 0; i < searchLength.length; i++) {
    const createLi = document.createElement("li");
    createLi.className = "list";
    createLi.textContent += searchLength[i].toUpperCase();
    ulElement.appendChild(createLi);
  }
};

//listener
const listener = () => {
  const btnElement = document.querySelector(".js-btn");
  btnElement.addEventListener("click", handlerClick);
};

listener();
