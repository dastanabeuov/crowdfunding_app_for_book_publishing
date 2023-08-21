import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const book = {
  "Name": "The Well-Grounded Rubyist",
  "Description": "This book will give you a foundation in Ruby, and this chapter will give your...",
  "Pages": "215",
  "Lang": "Eng",
  "progress": "75%",
  "Cover": "https://images.manning.com/360/480/resize/book/0/1ff4b68-4336-4386-bd3c-b9f061ac0901/Black-Rubyist-3ed-HI.png",

  "Author": {
    "Name": "David A. Black, Joseph Leo III",
    "E-mail": "web.dev.adk@gmail.com",
  },

  "Min_price": "25$",
  "Desired_price": "50$",
  "Collected_amount": "7000$",
  "Expected_amount": "35000$"
}

ReactDOM.render(
  <App book={book}/>,
  document.getElementById('root')
);