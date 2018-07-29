import React, { Component } from 'react';

class UIBuilder extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      phone: '',
    }
  }

  render() {
    return (
      <div className="UIBuilder">
        yo
      </div>
    )
  }
}

export default UIBuilder;
