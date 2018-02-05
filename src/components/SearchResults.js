import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Button, Header} from './common';
import Map from './Map';

class SearchResults extends Component {
  render(){
    return(
      <Card>
        <Map height="100%" width="100%" />
        <CardItem style={{position: 'absolute', bottom:'30%', left: '30%', zIndex: 1}}>
          <Header title="Search Results"/>
          <Button content="book" pressed={() => {Actions.LoginForm();}}/>
          <Button content="Contact" pressed={() => {Actions.LoginForm();}}/>
        </CardItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
