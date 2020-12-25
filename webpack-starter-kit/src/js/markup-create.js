import countryTpl from '../templates/country.hbs';
import countriesTpl from '../templates/countries.hbs'
import refs from './refs.js'

function updateCountryMarkup(country) {
    const markup = countryTpl(country);
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
  }

function updateCountriesMarkup(countries) {
    const markup = countriesTpl(countries);
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
  }


export {updateCountryMarkup, updateCountriesMarkup};
