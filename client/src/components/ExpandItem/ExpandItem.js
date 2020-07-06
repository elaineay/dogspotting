import React from 'react';
import './ExpandItem.css'

class ExpandItem extends React.Component {

  render() {
    return (
      <span>
        <p className = "expandItem">{this.props.curr}</p>
      </span>
    )
  }

}

export default ExpandItem;