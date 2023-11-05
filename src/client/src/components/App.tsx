import './assets/styles.scss';
import { Component, Fragment } from 'react';
import { AppProps } from './types';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Outlet />
      </Fragment>
    );
  }
}
