import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import thunk from 'redux-thunk';
import RouterComponent from './Router';
import AuthReducer from './src/reducers/AuthReducer';
import FiltersReducer from './src/reducers/FiltersReducer';

export default class Workorbe extends Component {

  componentWillMount(){
    var config = {
    apiKey: "AIzaSyCzFP8tYqkHorJrB0N8-JNIP065t79xgfg",
    authDomain: "workorbe-7ce58.firebaseapp.com",
    databaseURL: "https://workorbe-7ce58.firebaseio.com",
    projectId: "workorbe-7ce58",
    storageBucket: "workorbe-7ce58.appspot.com",
    messagingSenderId: "752554086962"
  };
  firebase.initializeApp(config);
  }

  render() {
    const rootReducer = combineReducers({
      auth: AuthReducer,
      filters: FiltersReducer
    });

    const store = createStore(rootReducer, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
