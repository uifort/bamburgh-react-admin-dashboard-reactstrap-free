import React, { Component } from 'react';

export default class ExampleWrapperSeamless extends Component {
  render() {
    return (
      <div className="example-card-seamless mb-5">
        <h5 className="display-4 mb-4 font-weight-bold">
          {this.props.sectionHeading}
        </h5>
        {this.props.children}
      </div>
    );
  }
}
