import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Input, Card, Button} from './common';
import {Actions} from 'react-native-router-flux';

class FiltersScreen extends Component {
  render(){
    return(
      <Card>
        <Header title="Filters Screen" />
        <Button content="Search" pressed={()=>{Actions.results()}} />
      </Card>
    )
  };
};

const mapStateToProps = (state) => {
  const {location, unionized, insurance, endDate, startDate, rating, rateMax, rateMin, capability, radius} = state.filters;
  return{
    location: location,
    unionized: unionized,
    insurance: insurance,
    rateMax: rateMax,
    rateMin: rateMin,
    startDate: startDate,
    endDate: endDate,
    rating: rating,
    capability: capability,
    radius: radius
  }
};

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
