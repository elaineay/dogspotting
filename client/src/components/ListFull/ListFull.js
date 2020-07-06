import React from "react";
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';
import './ListFull.css';

class ListFull extends React.Component {
  state = {
    input: {
      size: "",
      text: ""
    },
    curr: "",
    isBoop: true
  }

  render() {
    let change = this.state.isBoop ? "whiteBoop" : "blackBoop";

    return (
      <div className="listFull">
        <div className="header">
          <strong>
            DogSpotting Tracker
          </strong>
          <div>
            <button className={change} onClick = {() => this.changeColour()}> 
              metaphorical snout boop
            </button>
          </div>
        </div>
        
        <div className = "formInput">
          <form>
            <select name = "size" value = {this.state.input.size}
                onChange = {this.onChangeEvent}>
              <option value = "size unknown">Pick Pupper Size!</option>
              <option value = "smol">Smol</option>
              <option value = "medium">Medium</option>
              <option value = "chonk">Chonk</option>
            </select>

            <input name = "text" type ="text" value = {this.state.input.text} 
                onChange = {this.onChangeEvent}/>

            <input type = "submit" value = "Dog spotted!" onClick = {this.onAdd}/>
          </form>
        </div>
        

        <ul className = "listItems">
          { this.props.inputs.map ( item => (
            <p key = {item.id} onClick = {() =>this.expandItem(item)}>
              <span className="size">
                {item.size}
              </span>
              
              {item.text}
              
              <span className="delete" onClick={() => this.deleteItem(item)}> 
                [Delete] 
              </span>
            </p>
          ))}
        </ul>

        <div className="header">
          <span>More Information:</span>
        </div>
          <ListItem curr = {this.state.curr}></ListItem>
      </div>
    )
  }

  changeColour() {
    this.setState({isBoop: !this.state.isBoop})
  }

  onAdd = event => {
    event.preventDefault();
    this.props.dispatch(actions.addItem(this.state.input.size, this.state.input.text));

    this.setState({
      input: {
        size: "",
        text: ""
      }
    });

    // this part sets things to local --> specific to component only
    // const item = { id: this.state.input.id, text: this.state.input.text };
    // this.setState({item});
  }

  deleteItem(input) {
    this.props.dispatch(actions.deleteItem(input.id));
  }

  expandItem = input => {
    const curr = input.text;
    this.setState({curr});
  }

  onChangeEvent = event => {
    const input = {
      ...this.state.input,
      [event.target.name]: event.target.value
    }
    this.setState ({input});
  }
}

ListFull.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {inputs: state.input};
}

export default connect(mapStateToProps)(ListFull);