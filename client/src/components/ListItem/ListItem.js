import React from 'react';
import './ListItem.css'

class ListItem extends React.Component {

  render() {
    return (
      <span>
        <p className = "listItem">{this.props.curr}</p>
      </span>
    )
  }

}

export default ListItem;