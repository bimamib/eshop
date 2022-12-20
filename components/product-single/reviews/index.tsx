import Punctuation from './punctuation';
import { ProductType } from '../../../types';
import ReviewsList from './review-list';

type ReviewsProductType = {
  show: boolean;
  product: ProductType;
}

const Reviews = ({ show, product }: ReviewsProductType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__reviews">
      <Punctuation 
        punctuation={product.punctuation.punctuation}
        countOpinions={product.punctuation.countOpinions}
        votes={product.punctuation.votes} 
      />
      <ReviewsList reviews={product.reviews} />
    </section>
  );
};
  
export default Reviews;
    