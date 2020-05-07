import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import ResultsItem from "./ResultsItem";

const ResultsList = ({header, results, navigation}) => {
  if(!results.length){
    return null;
  }
  return <View style={styles.container}>
    <Text style={styles.title}>{header}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: item.id})}>
            <ResultsItem result={item}/>
          </TouchableOpacity>
        )
      }}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default withNavigation(ResultsList);