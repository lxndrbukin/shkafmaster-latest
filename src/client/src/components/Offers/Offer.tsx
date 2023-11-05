import { Component } from 'react';
import { Link } from 'react-router-dom';
import { OfferProps } from './types';

export class Offer extends Component<OfferProps> {
  constructor(props: OfferProps) {
    super(props);
  }

  get style() {
    const { img } = this.props;
    return {
      backgroundImage: `url(${img})`,
    };
  }

  render() {
    const { headerText, category, price, discount } = this.props;
    return (
      <Link to="#" className="offer">
        <div className="offer-img" style={this.style} />
        <div className="offer-header">{headerText}</div>
        <div className="offer-category">{category}</div>
        <div className="offer-price">
          <div className="discounted">
            {price - price * (discount / 100)} MDL
          </div>
          <div className="original">{price} MDL</div>
        </div>
      </Link>
    );
  }
}
