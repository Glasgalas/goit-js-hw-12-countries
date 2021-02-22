import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import updateCountries from './update';
import refs from './refs';

function searchCountry(event) {
  event.preventDefault();
  let searchQuery = event.target.value;
  refs.markup.innerHTML = '';
  fetchCountries(searchQuery).then(updateCountries);
}

refs.input.addEventListener('input', debounce(searchCountry, 500));
