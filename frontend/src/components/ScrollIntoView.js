import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ScrollIntoView extends React.Component {
  DOMNode;
  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this);
  }
  componentDidUpdate() {
    if (this.props.shouldScroll) {
      this.DOMNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
