import React from "react";
import Popup from './Popup/Popup';
import './List.css';

// https://www.skptricks.com/2019/01/create-simple-popup-example-in-react.html
class UpdateItem extends React.Component {
      constructor(props) {
            super(props);
            this.state = { popup: false };
      }

      render() {
            return (
                  <span>
                        <button className = "update" onClick={this.togglePopup.bind(this)} >
                              Update
                        </button> 

                        {this.state.popup ?
                              <Popup 
                                    closePopup = { this.togglePopup.bind(this) }
                                    id = { this.props.id }
                              />
                              : null
                        }
                  </span>
                 
            )
      }

      togglePopup() {
            this.setState({
                  popup: !this.state.popup
            });
      }
}

export default UpdateItem;