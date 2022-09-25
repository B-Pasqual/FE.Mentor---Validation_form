'use strict';

//! Selecionando tudo que será necessário

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span__required');
const button = document.querySelector('.submit__btn');

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//! Funções ---------

//! reusable functions

const setError = (i) => {
  inputs[i].style.border = '2px solid red';
  spans[i].style.display = 'block';
};

const removeError = (i) => {
  inputs[i].style.border = '1px solid green';
  spans[i].style.display = 'none';
};

//!First and last name validation
const namesValidation = () => {
  for (let i = 0; i < 2; i++) {
    if (inputs[i].value.length < 3) {
      setError(i);
    } else {
      removeError(i);
    }
  }
};
//Password validation
let passwordCheck = function () {
  if (inputs[3].value.length < 12) {
    setError(3);
  } else {
    removeError(3);
  }
};
//Email validation
let emailValidation = () => {
  if (emailRegex.test(inputs[2].value)) {
    removeError(2);
  } else {
    setError(2);
  }
};

//!Code

button.addEventListener('click', () => {
  namesValidation();
  passwordCheck();
  emailValidation();
});
