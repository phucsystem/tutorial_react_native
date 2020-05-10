import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: null, token: action.payload};
    case 'signin':
      return {errorMessage: null, token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: null};
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () =>  {
  dispatch({type: 'clear_error_message'});
}


const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});

    navigate('TrackList');
  } catch (err) {
    console.log(err.response.data);
    dispatch({type: 'add_error', payload: 'Something went wrong with signup'});
  }
};

const signin = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    navigate('TrackList')
  } catch (err) {
    console.log(err.response.data);
    dispatch({type: 'add_error', payload: 'Something went wrong with signin'});
  }
};

const signout = dispatch => {
  return () => {
    // somehow sign out!!!
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage},
  {token: null, isSignedIn: false}
);