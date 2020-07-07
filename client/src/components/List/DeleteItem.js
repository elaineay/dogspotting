import React from "react";
import api from "../../api";
import './List.css';

class DeleteItem extends React.Component {
      render() {
            return (
                  <button className="delete" onClick={this.deleteItem}> 
                        Delete
                  </button>
            )
      }

      deleteItem = event => {
            event.preventDefault();
            api.deleteSpot(this.props.id);
            this.props.handleChange(this.props.id);
      }
}

export default DeleteItem;