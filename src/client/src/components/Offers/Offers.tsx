import './assets/styles.scss';
import { Component } from 'react';
import { OfferProps } from './types';
import { offersList } from './assets/offersList';
import { Offer } from './Offer';

export class Offers extends Component {
  renderList(): JSX.Element[] {
    return offersList.map((offer: OfferProps) => {
      return <Offer key={offer.headerText} {...offer} />;
    });
  }

  render(): JSX.Element {
    return (
      <div className="offers">
        <h2>Offers</h2>
        <div className="offers-list">{this.renderList()}</div>
      </div>
    );
  }
}
