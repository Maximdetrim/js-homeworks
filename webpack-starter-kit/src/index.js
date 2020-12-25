import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCoutries';
import debounce from 'lodash.debounce';






refs.input.addEventListener('input', debounce(
  function onInput(event) {
    refs.countriesList.innerHTML = '';
    fetchCountries(event)
  }, 300))



  


