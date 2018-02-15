import React from 'react';

const initialState = {
  experience: '',
  rateMin:0,
  rateMax:0,
  rating: '5',
  radius: 10,
  capability:'',
  insurance:true,
  unionized:true,
  coordinates:{},
  availabilityMin:'',
  availabilityMax:''
};

const FiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'capabilityChange':
      return {...state, capability: action.payload};
    case 'experienceChange':
      return {...state, experience: action.payload};
    case 'rateMinChange':
      return {...state, rateMin: action.payload};
    case 'rateMaxChange':
      return {...state, rateMax: action.payload};
    case 'ratingChange':
      return {...state, rating: action.payload};
    case 'insuranceChange':
      return {...state, insurance: action.payload};
    case 'unionizedChange':
      return {...state, unionized: action.payload};
    case 'radiusChange':
      return {...state, radius: action.payload};
    case 'locationChange':
      return {...state, coordinates: action.payload};
    case 'availabilityMinChange':
      return {...state, availabilityMin: action.payload};
    case 'availabilityMaxChange':
      return {...state, availabilityMax: action.payload};
    default:
      return state
  }
};

export default FiltersReducer;
