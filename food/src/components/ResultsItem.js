import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const ResultsItem = ({result}) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={{uri: result.image_url}}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Start | {result.review_count} Reviews</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold",
  }
});

export default ResultsItem;