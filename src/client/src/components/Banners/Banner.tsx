import { Component } from 'react';
import { Link } from 'react-router-dom';
import { BannerProps } from './types';

export class Banner extends Component<BannerProps> {
  constructor(props: BannerProps) {
    super(props);
  }

  get style() {
    return {
      backgroundImage: `url(${this.props.img})`,
    };
  }

  render(): JSX.Element {
    const { path, headerText, subText } = this.props;
    return (
      <Link to={path} style={this.style} className="banner">
        <div className="banner-header">{headerText}</div>
        {subText && <div className="banner-subtext">{subText}</div>}
        <Link to={path} className="banner-link">
          More Info
        </Link>
      </Link>
    );
  }
}
