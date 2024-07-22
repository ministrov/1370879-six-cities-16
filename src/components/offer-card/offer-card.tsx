import { useState } from 'react';
import classNames from 'classnames';

type OfferCardProps = {
  isPremium: boolean;
  price: number;
  isFavorite: boolean;
  name: string;
  type: string;
  src: string;
}

function OfferCard({ isFavorite, price, isPremium, name, type, src }: OfferCardProps) {
  const [selectedCard, setSelectedCard] = useState<boolean>(false);

  const onMouseOverHandler = () => {
    // event: MouseEvent<HTMLElement>
    // console.log(event.target);
    // const {width, alt} = event.target;
    setSelectedCard(true);
  };

  const favoriteLabel: string = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClass: string = classNames('button', 'place-card__bookmark-button', {
    'place-card__bookmark-button--active': isFavorite
  });
  return (
    <article onMouseOver={onMouseOverHandler} className="cities__card place-card">
      {selectedCard}
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{favoriteLabel}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: 80 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
