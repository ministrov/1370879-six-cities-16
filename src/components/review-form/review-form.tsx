import { useState } from 'react';
import FormRating from '../form-rating/form-rating';

function ReviewForm() {
  const [formData, setFormData] = useState({
    textarea: ''
  });

  const handleFieldChange = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const {, value } = evt;
    setFormData({
      ...formData,
      // [textarea]: value
    });
    // console.log('Field is changed');
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <FormRating />
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
