import React from 'react';

const initialState = {
  experience: 0,
  rateMin:0,
  rateMax:100000000000000,
  rating:1,
  radius:40075/2,
  capability:'',
  insurance:false,
  unionized:false,
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
