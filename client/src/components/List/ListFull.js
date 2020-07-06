import React from "react";
import PropTypes from 'prop-types';
import ExpandItem from '../ExpandItem/ExpandItem';
// import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';
import './ListFull.css';
import api from '../../api';
import UpdateItem from './UpdateItem';
import DeleteItem from './DeleteItem';

class ListFull extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: {
        size: "",
        text: ""
      },
      dogspots: [],
      isLoading: false,
      apiResponse: "",
      curr: "",
      isBoop: true,
    }
  }

  componentDidMount = async () => {
    await api.getDogSpots().then(dogspots => {
      console.log("dogspots" + dogspots);

      this.setState({
        dogspots: dogspots.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    let change = this.state.isBoop ? "whiteBoop" : "blackBoop";
    const {dogspots} = this.state;

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
          { Object.entries(dogspots).map( (item, index) => (
            <span key = {index} onClick = {() =>this.expandItem(item)}>
              <span className="size">
                {item.size}
              </span>
              
              {item.text}

              <UpdateItem currId = {item.id} />
              
              <DeleteItem currId = {item.id}/>
            </span>
          ))}
        </ul>

        <div className="header">
          <span>More Information:</span>
        </div>
          <ExpandItem curr = {this.state.curr}></ExpandItem>
      </div>
    )
  }

  changeColour() {
    this.setState({isBoop: !this.state.isBoop})
  }

  onAdd = async () => {
    const {size, text} = this.state.input;
    const payload = {size, text}

    await api.createSpot(payload).then(res => {
      this.setState({
          input: {
            size: "",
            text: ""
          }
        })
    })
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