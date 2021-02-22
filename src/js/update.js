import refs from '../js/refs.js';
import tempOne from '../templates/template-one.hbs';
import tempMore from '../templates/template-more.hbs';
import {
  infoMoreSimilar,
  infoOneSimilar,
  errManySimilar,
  errNotFinded,
} from './notifications.js';

function markupOneCountries(data) {
  const markup = tempOne(data);
  refs.markup.insertAdjacentHTML('beforeend', markup);
}

function markupMoreCountries(data) {
  const markup = tempMore(data);
  refs.markup.insertAdjacentHTML('beforeend', markup);
}

function updateCountries(data) {
  if (data.length === 1) {
    markupOneCountries(data);
    console.log('Показываем 1 страну');
    infoOneSimilar();
    return;
  }
  if (data.length > 1 && data.length < 10) {
    markupMoreCountries(data);
    console.log('Показываем все страны');
    infoMoreSimilar();
    return;
  }
  if (data.length > 10) {
    console.log('Cлишком много стран!!!!');
    errManySimilar();
    return;
  }
  errNotFinded();
}

export default updateCountries;
