import {countsFilmCards} from '../const';
import {createFilmCardBlockTemplate} from './film-card-block';

export const createMainFilmsTemplate = () => {

  const blockFilmCardMain = createFilmCardBlockTemplate(
      countsFilmCards.MAIN, {
        title: {
          text: `All movies. Upcoming`,
          isHidden: true
        },
        isShowMore: true
      }
  );

  const blockFilmCardTop = createFilmCardBlockTemplate(
      countsFilmCards.TOP_RATED, {
        title: {
          text: `Top rated`,
          isHidden: false
        },
        isExtraBlock: true,
      }
  );

  const blockFilmCardCommented = createFilmCardBlockTemplate(
      countsFilmCards.MOST_COMMENTED, {
        title: {
          text: `Most commented`,
          isHidden: false
        },
        isExtraBlock: true,
      }
  );

  return (`
    <section class="films">
      ${blockFilmCardMain}
      ${blockFilmCardTop}
      ${blockFilmCardCommented}
    </section>
  `);
};
