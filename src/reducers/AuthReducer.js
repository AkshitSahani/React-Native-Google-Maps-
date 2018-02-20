import React from 'react';

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
  loggedIn: false,
  signedUp: false,
  name: '',
  company: '',
  phone: '',
  passwordConfirmation: '',
  passwordNotConfirmed: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'emailChanged':
      return {...state, email: action.value}
    case 'passwordChanged':
      return {...state, password: action.value}
    case 'phoneChanged':
      return {...state, phone: action.value}
    case 'companyChanged':
      return {...state, company: action.value}
    case 'nameChanged':
      return {...state, name: action.value}
    case 'confirmationChanged':
      return {...state, passwordConfirmation: action.value}
    case 'loginSuccess':
      return {...state, ...initialState, user: action.user, loggedIn: true}
    case 'loginFailure':
      return {...state, error: action.error, password: '', loading: false}
    case 'loginStart':
      return {...state, loading: true, error: ''}
    case 'signUpSuccess':
      return {...initialState, user: action.user, signedUp: true}
    case 'signUpFailure':
      return {...state, error: action.error, password: '', loading: false, email: '', passwordConfirmation: ''}
    case 'signUpStart':
      return {...state, loading: true, error: '', passwordNotConfirmed: null}
    case 'passwordNotConfirmed':
      return {...state, passwordNotConfirmed: true, loading: false, password: '', passwordConfirmation: ''}
    case 'movingToSignUp':
      return {...initialState}
    case 'loadingLoginPage':
      return {...state, error: ''}
    default:
      return state;
  }
};

export default AuthReducer;
