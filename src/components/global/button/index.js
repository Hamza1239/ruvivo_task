import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={this.props.style} >{this.props.text} {this.props.children}</div>
      </div>
    )
  }
}

export default Button;