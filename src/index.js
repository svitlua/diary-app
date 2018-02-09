import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './styles.css'

// let itemlist=[{text: "item1", key: 92034234, comments: ["good", "nice", "super"]}, {text: "item2", key: 92034235, comments: ["good2", "nice2", "super2"]},{text: "item3", key: 9294034234, comments: ["good3", "nice3", "super3"]}];
// localStorage.setItem('itemlist', JSON.stringify(itemlist));

let items = [];
if (localStorage.getItem("itemlist") !== null) {
  const cachedItems = localStorage.getItem('itemlist');
  console.log(cachedItems);
  items = JSON.parse(cachedItems);
}

ReactDOM.render(
  <App items={items}/>, document.getElementById('diary-app')
);
