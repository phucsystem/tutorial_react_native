/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView style={{flex: 1}}>
        <Header headerText={'Tech Stack!!!'} />
        <LibraryList />
        <View />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
