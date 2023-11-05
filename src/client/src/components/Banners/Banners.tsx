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
          key={banner.headerText}
          headerText={banner.headerText}
          subText={banner.subText ? banner.subText : undefined}
          img={banner.img}
          path={banner.path}
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
