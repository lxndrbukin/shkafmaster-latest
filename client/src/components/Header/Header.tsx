import './assets/styles.scss';
import { Component, Fragment } from 'react';
import { HeaderSearch } from './HeaderSearch';
import { HeaderActions } from './HeaderActions';
import { HeaderNav } from './HeaderNav';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-top-wrapper">
          <div className="header-top">
            <a href="/" className="header-logo">
              SHKAFMASTER
            </a>
            <HeaderSearch />
            <HeaderActions />
          </div>
        </div>
        <HeaderNav />
      </header>
    );
  }
}
