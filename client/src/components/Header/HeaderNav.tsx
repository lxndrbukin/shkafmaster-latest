import { Component } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export class HeaderNav extends Component {
  render() {
    return (
      <nav className="header-nav">
        <ul className="header-nav-links">
          <li className="header-nav-link">
            Kitchens <BiChevronDown />
          </li>
          <li className="header-nav-link">
            Wardrobes <BiChevronDown />
          </li>
          <li className="header-nav-link">
            Living Rooms <BiChevronDown />
          </li>
        </ul>
      </nav>
    );
  }
}
