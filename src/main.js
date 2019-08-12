import {getTripInfo} from './components/trip-info';
import {getMenu} from './components/menu';
import {getFilters} from './components/filters';
import {getSort} from './components/sort';
import {getForm} from './components/form';
import {getCard} from './components/card';

const CARDS_AMOUNT = 3;

const renderElement = function (selector, position, content) {
  const container = document.querySelector(selector);
  container.insertAdjacentHTML(position, content);
};

renderElement(`.trip-main__trip-info`, `afterbegin`, getTripInfo());
renderElement(`.trip-main__trip-controls > h2`, `afterend`, getMenu());
renderElement(`.trip-main__trip-controls`, `beforeend`, getFilters());
renderElement(`.trip-events`, `beforeend`, getSort());
renderElement(`.trip-events`, `beforeend`, getForm());

for (let i = 0; i < CARDS_AMOUNT; i++) {
  renderElement(`.trip-events`, `beforeend`, getCard());
}
