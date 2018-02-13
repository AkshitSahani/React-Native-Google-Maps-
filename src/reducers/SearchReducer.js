import React from 'react';

const initialState = {
  users: []
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchResult':
      console.log('action.payload: ', action.payload);
      return {...state, users: action.payload};
    default:
      return state
  }
};

export default SearchReducer;
