import {createFilmCardTemplate} from './film-card';
import {createShowMoreBtnTemplate} from './show-more-button';

export const createFilmCardBlockTemplate = (cardsCount, contentData) => {
  const {title: {text, isHidden}, isExtraBlock, isShowMore} = contentData;

  const textTitle = typeof text === `string` ? text : ``;
  const hiddenClass = isHidden ? ` visually-hidden` : ``;
  const sectionClass = isExtraBlock ? `films-list--extra` : `films-list`;
  const showMoreBtnTemplate = isShowMore ? createShowMoreBtnTemplate() : ``;

  return (`
  <section class="${sectionClass}">
    <h2 class="films-list__title ${hiddenClass}">${textTitle}</h2>
    <div class="films-list__container">
      ${new Array(cardsCount).fill(createFilmCardTemplate()).join(``)}
    </div>
    ${showMoreBtnTemplate}
  </section>
  `);
};
