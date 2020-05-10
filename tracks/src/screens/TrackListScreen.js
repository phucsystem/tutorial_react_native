import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';



const TrackListScreen = ({navigation}) => {
  return (<View>
    <Text style={{fontSize: 48}}>Track List Screen</Text>
    <Button title={"Go To Track Detail"} onPress={()=>navigation.navigate("TrackDetail")} />
  </View>);


}

const styles = StyleSheet.create({});

export default TrackListScreen;