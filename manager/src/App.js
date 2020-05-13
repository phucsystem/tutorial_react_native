import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyAb1g2ZJxGSYubXHdYEt4BqQvzmg3b2RJE',
      authDomain: 'manager-4153b.firebaseapp.com',
      databaseURL: 'https://manager-4153b.firebaseio.com',
      storageBucket: 'manager-4153b.appspot.com',
      messagingSenderId: '342213844353',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
