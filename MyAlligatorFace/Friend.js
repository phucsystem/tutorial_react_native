import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';

export default class Friend extends Component {
  render() {
    return (
      <View>
        <Text>Add friends here!</Text>
        {
          this.props.friends.possible.map((friend, index) => (
              <Button
                key={ friend }
                title={ `Add ${ friend }` }
                onPress={() =>
                  this.props.screenProps.addFriend(index)
                }
              />
            )
          )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />

      </View>
    );
  }
}