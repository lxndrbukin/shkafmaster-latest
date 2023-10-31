import './assets/styles.scss';
import { Component } from 'react';
import { BannerProps } from './types';
import { bannersList } from './assets/bannersList';
import { Banner } from './Banner';

export class Banners extends Component {
  renderBanners(): JSX.Element[] {
    return bannersList.map((banner: BannerProps): JSX.Element => {
      return (
        <Banner
          key={banner.mainText}
          mainText={banner.mainText}
          img={banner.img}
        />
      );
    });
  }

  render(): JSX.Element {
    return (
      <div className="banners">
        <div className="banner-list">{this.renderBanners()}</div>
      </div>
    );
  }
}
