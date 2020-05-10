import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>We have  { this.props.friends.current.length } friends!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
  );
  }
}
