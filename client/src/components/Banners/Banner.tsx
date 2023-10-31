import { Component } from 'react';
import { BannerProps } from './types';

export class Banner extends Component<BannerProps> {
  constructor(props: BannerProps) {
    super(props);
  }

  get style() {
    return {
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: 'cover',
    };
  }

  render(): JSX.Element {
    return (
      <div style={this.style} className="banner">
        Banner
      </div>
    );
  }
}
