import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

export class HeaderSearch extends Component {
  render() {
    return (
      <form className="header-search">
        <input type="text" placeholder="Search" />
        <button>
          <BsSearch size={20} />
        </button>
      </form>
    );
  }
}
