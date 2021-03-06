import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

let debug = require('debug');

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList
        header="Cost Effective"
        results={filterResultsByPrice('$')}
      />
      <ResultsList
        header="Bit Pricier"
        results={filterResultsByPrice('$$')}
      />
      <ResultsList
        header="Big Spender"
        results={filterResultsByPrice('$$$')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
