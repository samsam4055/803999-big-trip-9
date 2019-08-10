import {getTripInfo} from './components/trip-info';
import {getMenu} from './components/menu';
import {getFilters} from './components/filters';
import {getSort} from './components/sort';
import {getForm} from './components/form';
import {getCard} from './components/card';

const renderElement = function (selector, place, content, count = 1) {
  for (let i = 0; i < count; i++) {
    let container = document.querySelector(selector);

    container.insertAdjacentHTML(place, content);
  }
};

renderElement(`.trip-main__trip-info`, `afterbegin`, getTripInfo());
renderElement(`.trip-main__trip-controls`, `beforeend`, getMenu());
renderElement(`.trip-main__trip-controls`, `beforeend`, getFilters());
renderElement(`.trip-events`, `beforeend`, getSort());
renderElement(`.trip-events`, `beforeend`, getForm());
renderElement(`.trip-events`, `beforeend`, getCard(), 3);
