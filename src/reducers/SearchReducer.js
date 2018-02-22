import React from 'react';

const initialState = {
  users: [],
  selectedUser: null
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchResult':
      console.log('action.payload: ', action.payload);
      return {...state, users: action.payload};
    case 'selectUser':
    console.log(action.user);
      return{...state, selectedUser: action.user};
    default:
      return state
  }
};

export default SearchReducer;
