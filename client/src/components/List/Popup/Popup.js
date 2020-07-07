import React from 'react';
import './Popup.css';
import api from './../../../api';

class Popup extends React.Component {
      constructor(props) {
            super(props)

            this.state = {
                  id: this.props.id,
                  size: "",
                  text: "",
            }
      }

      render() {
            return (
                  <div className='popup'>
                        <div className='popup_inner'>
                              <h1>Update An Existing Spotting</h1>

                              <div className = "formInput">
                                    <form>
                                          <select name = "size" value = {this.state.size}
                                          onChange = {this.onChangeEvent}>
                                          <option value = "size unknown">Pick Pupper Size!</option>
                                          <option value = "smol">Smol</option>
                                          <option value = "medium">Medium</option>
                                          <option value = "chonk">Chonk</option>
                                          </select>

                                          <input name = "text" type ="text" value = {this.state.text} 
                                          onChange = {this.onChangeEvent}/>

                                          <input type = "submit" value = "Update dog spotting" onClick = {this.handleUpdate}/>
                                    </form>
                              </div>

                              <button onClick={this.props.closePopup}>Close</button>
                        </div>
                  </div>
            );
      }

      onChangeEvent = event => {
            const value = event.target.value
            this.setState ({
                  ...this.state,
                  [event.target.name]: value
            });

            console.log("value" + value)
      }
            

      handleUpdate = async () => {
            const { id, size, text } = this.state; 
            const payload = { size, text };
            console.log(this.state)

            await api.updateSpot(id, payload)
                  .then(res => {
                        this.setState({
                              size: "",
                              text: "",
                        })
                  })
      }

      componentDidMount = async () => {
            const { id } = this.state
            const dogspot = await api.getSpotById(id);

            this.setState({
                  size: dogspot.data.data.size,
                  text: dogspot.data.data.text
            })
      }
}

export default Popup;