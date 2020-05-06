import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsItem from "./ResultsItem";

const ResultsList = ({header, results}) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{header}</Text>
    <FlatList
      horizontal
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return (
          <ResultsItem result={item}/>
        )
      }}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default ResultsList;