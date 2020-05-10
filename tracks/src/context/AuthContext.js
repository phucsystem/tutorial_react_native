import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from "../navigationRef";

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token.length > 0) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: null, token: action.payload};
    case 'signin':
      return {errorMessage: null, token: action.payload};
    case 'signout':
      return { token: null, errorMessage: '' };
    case 'clear_error_message':
      return {...state, errorMessage: null};
    default:
      return state;
  }
};


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

const signout = dispatch => async () => {
  console.log('signout');
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, isSignedIn: false}
);