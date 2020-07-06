import React from "react";
import Popup from './Popup/Popup';

// https://www.skptricks.com/2019/01/create-simple-popup-example-in-react.html
class UpdateItem extends React.Component {
      constructor(props) {
            super(props);
            this.state = { popup: false };
      }

      render() {
            return (
                  <div>
                        <button onClick={this.togglePopup.bind(this)}>
                              Update
                        </button> 

                        {this.state.popup ?
                              <Popup 
                                    closePopup = { this.togglePopup.bind(this) }
                                    currId = { this.props.currId }
                              />
                              : null
                        }
                  </div>
                 
            )
      }

      togglePopup() {
            this.setState({
                  popup: !this.state.popup
            });
      }
}

export default UpdateItem;