import React, {Component} from "react";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendReducer from "./FriendReducer";
import AppNavigator from "./AppNavigator";

const store = createStore(friendReducer);
export default class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   possibleFriends: [
    //     'Phuc',
    //     'An',
    //     'Thinh'
    //   ],
    //   currentFriends: []
    // }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state;

    const addedFriend = possibleFriends.splice(index, 1);

    currentFriends.push(addedFriend);

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    });
  }

  render() {
    return (
      <AppNavigator screenProps={{
        // currentFriends: this.state.currentFriends,
        friends: this.store.state,
        addFriend: this.addFriend,
      }}/>
    );
  }
}