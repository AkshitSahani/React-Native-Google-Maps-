import fireBase from 'firebase';
import firebase from '@firebase/app';
import '@firebase/firestore';
import {Actions} from 'react-native-router-flux';

export const loginSuccess = (user) => {return {type: 'loginSuccess', user: user}};

export const loginFailure = (error) => {return {type: 'loginFailure', error: error}};

export const loginStart = () => {return {type: 'loginStart'}};

export const signUpStart = () => {return {type: 'signUpStart'}};

export const signUpSuccess = (user) => {return {type: 'signUpSuccess', user: user}};

export const signUpFailure = (error) => {return {type: 'signUpFailure', error: error}};

export const passwordNotConfirmed = () => {return {type: 'passwordNotConfirmed'}};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    fireBase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {dispatch(loginSuccess(user)); Actions.results();})
      .catch((error)=>{return dispatch(loginFailure(error))});
  };
};

export const signUp = (email, password, phone, company, name) => {
  return (dispatch, getState) => {
    dispatch(signUpStart());
    if(getState().auth.password === getState().auth.passwordConfirmation){
      fireBase.auth().createUserWithEmailAndPassword(email, password)
        .then(user=>{
          firebase.firestore().collection('users').doc(user.uid).set({email, phone, company, name});
          dispatch(signUpSuccess(user));
          Actions.results();
        })
        .catch((error)=>{return dispatch(signUpFailure(error))})
    }
    else{
      dispatch(passwordNotConfirmed());
    }
  };
};
