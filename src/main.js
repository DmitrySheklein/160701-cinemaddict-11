import {render} from './utils';
import {createHeaderProfileTemplate} from './components/header-profile';
import {createMainNavigationTemplate} from './components/main-navigation';
import {createSortTemplate} from './components/sort';
import {createStatTemplate} from './components/stat';
import {createMainFilmsTemplate} from './components/content';
import {createPopUpTemplate} from './components/popup';

const init = () => {
  const siteMainElement = document.querySelector(`.main`);
  const siteHeaderElement = document.querySelector(`.header`);
  const siteFooterElement = document.querySelector(`.footer`);
  const blockStatistics = siteFooterElement.querySelector(`.footer__statistics`);

  render(siteHeaderElement, createHeaderProfileTemplate());
  render(blockStatistics, createStatTemplate());
  render(siteMainElement, createMainNavigationTemplate());
  render(siteMainElement, createSortTemplate());
  render(siteMainElement, createMainFilmsTemplate());
  render(siteFooterElement, createPopUpTemplate(), `afterEnd`);
};

init();
