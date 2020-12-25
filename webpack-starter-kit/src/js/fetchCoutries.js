import  {updateCountryMarkup, updateCountriesMarkup} from './markup-create.js';
import { alert } from "@pnotify/core";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

let name = '';

function fetchCountries (event) {
    name = event.target.value;
return  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(onFetch)
    .catch(console.log);
}

export default fetchCountries;

function onFetch(arr) {
    if (arr.length > 10) {
        alert({
            title: "Attention",
            text:
              "Too many matches found. Please enter a more specific query!"
          });
        return
      }
     else {arr.length === 1 ? updateCountryMarkup(arr) : updateCountriesMarkup(arr)}
}

