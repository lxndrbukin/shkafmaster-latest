import { Component } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

export class HeaderActions extends Component {
  render() {
    return (
      <div className="header-actions">
        <div className="header-actions-call">
          <FiPhoneCall size={28} />
          <div className="header-action-call-numbers">
            <span>+373-699-23-0-28</span>
            <span>+373-796-84-0-94</span>
          </div>
        </div>
      </div>
    );
  }
}
