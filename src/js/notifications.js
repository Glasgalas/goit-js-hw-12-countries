import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {
  info,
  success,
  error,
  defaultModules,
  // defaults,
  Stack,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

function errNotFinded() {
  error({
    title: 'Упс!',
    text: `Таких стран не найдено`,
    delay: 1000,
  });
}

function errManySimilar() {
  info({
    title: 'Слишком много совпадений',
    text: 'Пожалуйста, уточните запрос',
    delay: 1000,
  });
}
function infoOneSimilar() {
  success({
    title: 'Ура!',
    text: `Найдена такая страна!`,
    delay: 1000,
  });
}

function infoMoreSimilar() {
  success({
    title: 'Уcпех!',
    text: `Страны по вашему запросу найдены!`,
    delay: 1000,
  });
}

export { infoMoreSimilar, infoOneSimilar, errManySimilar, errNotFinded };
