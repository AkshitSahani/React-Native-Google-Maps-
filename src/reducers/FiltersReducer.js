import React from 'react';

const initialState = {
  unionized: true,
  insurance: true,
  rateMax: '',
  rateMin: '',
  location: '',
  capability: '',
  radius: '',
  rating: '',
  startDate: '',
  endDate: ''
};

const FiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update':
      return {...state}
    default:
      return state
  }
};

export default FiltersReducer;
