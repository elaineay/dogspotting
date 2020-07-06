import React from "react";
import api from "../../api";

class DeleteItem extends React.Component {
      render() {
            return (
                  <button className="delete" onClick={() => this.deleteItem}> 
                        Delete
                  </button>
            )
      }

      deleteItem = event => {
            event.preventDefault()
            api.deleteSpot(this.props.currId)
      }
}

export default DeleteItem;