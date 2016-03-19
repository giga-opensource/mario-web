import React, { Component } from 'react';

export default class CreateView extends Component {
  render() {
    return (
      <div>
        <div>
          Sort:
          <button>+ Add</button>
        </div>
        <div>
          Filter
          <button>+ Add</button>
        </div>
      </div>
    );
  }
}
