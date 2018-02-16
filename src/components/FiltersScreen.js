import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text, Switch, Picker,Platform } from 'react-native';
import {Header, Input, Card, Button, SwitchInput, DatePage, SlideBar, Radius, Rate, Rating } from './common';
import {Actions} from 'react-native-router-flux';
import * as searchActions from '../actionCreators/searchFilter';
import {search} from '../actionCreators/search';

class FiltersScreen extends Component {
  state = {
    rateClicked: false,
    dateClicked: false
  };

  onCapabilityChange(capability) {
    this.props.capabilityChange(capability);
  }

  onExperienceChange(experience) {
    this.props.experienceChange(experience);
  }

  onRateMinChange(ratemin) {
    this.props.rateMinChange(ratemin);
  }

  onRateMaxChange(ratemax) {
    this.props.rateMaxChange(ratemax);
  }

  onRatingChange(rating) {
    this.props.ratingChange(rating);
  }

  onInsuranceChange(insurance) {
    this.props.insuranceChange(insurance);
  }

  onUnionizedChange(unionized) {
    this.props.unionizedChange(unionized);
  }

  onRadiusChange(radius) {
    this.props.radiusChange(radius);
  }

  onAvailabilityMinChange(availabilityMin) {
    this.props.availabilityMinChange(availabilityMin);
  }

  onAvailabilityMaxChange(availabilityMaxChange) {
    this.props.availabilityMaxChange(availabilityMaxChange);
  }

  onSearchButtonPress() {
    this.props.search({...this.props.filters});
    Actions.results();
  }

  onRateButtonPress() {
    // this.props.search({...this.props.filters});
    this.setState({rateClicked:!this.state.rateClicked});
    if (this.state.dateClicked) {
      this.setState({dateClicked:!this.state.dateClicked});
    }
  }

  onSetRateButtonPress() {
    console.log('rateClicked:', this.state.rateClicked);
    this.setState({rateClicked:false});
    console.log('rateClicked:', this.state.rateClicked);
  }

  showRateOptions(rateMin,rateMax) {
    // return (this.state.rateClicked ? <Rate/> : '' );
    if (this.state.rateClicked) {
      return (
        <Rate
          rateMin={rateMin}
          rateMax={rateMax}
          selectMin={this.onRateMinChange.bind(this)}
          selectMax={this.onRateMaxChange.bind(this)}
          close={this.onSetRateButtonPress.bind(this)}
        />
      );
    }
  }

  onDateButtonPress() {
    this.setState({dateClicked:!this.state.dateClicked});
    if (this.state.rateClicked) {
      this.setState({rateClicked:!this.state.rateClicked});
    }
  }

  showDateOptions(availabilityMin,availabilityMax) {
    if (this.state.dateClicked) {
      return (
        <DatePage
          availabilityMin={availabilityMin}
          availabilityMax={availabilityMax}
          selectMin={this.onAvailabilityMinChange.bind(this)}
          selectMax={this.onAvailabilityMaxChange.bind(this)}
        />
      );
    }
  }



  render(){

    const { experience,
            rateMin,
            rateMax,
            radius,
            capability,
            insurance,
            unionized,
            rating,
            availabilityMin,
            availabilityMax
            } = this.props.filters;

    const rateAndDateButtonStyle = {
      button: {
        // alignSelf: "center",
        backgroundColor: '#F9BA32',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 50,
        height: 45
      },
      text:{
        fontSize: 20,
        color: 'white'
      }
    };

    const searchButtonStyle = {
      button: {
        alignSelf: 'center',
        backgroundColor: '#F9BA32',
        borderRadius: 5,
        paddingVertical: 10,
        // paddingHorizontal: 40,
        width:'85%',
        height: 45,
        marginVertical:15
      },
      text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
      }
    };

    return(
      <Card style={{
        margin:0,
        position: 'absolute',
        top: 0,
        height: '100%',
        left: 0,
        right: 0
      }}>

        <Input
          label="Capability"
          changed={this.onCapabilityChange.bind(this)}
          value={capability}
          placeholder=""
        />

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginBottom:15
          }}
        >
          <Button
            style={rateAndDateButtonStyle}
            content="$ Rate"
            pressed={this.onRateButtonPress.bind(this)}

          />


          <Button
            style={rateAndDateButtonStyle}
            content="Date"
            pressed={this.onDateButtonPress.bind(this)}
          />
        </View>


        <Input
          label="Experience"
          changed={this.onExperienceChange.bind(this)}
          value={experience.toString()}
          placeholder=""
        />


        <Radius
          pressed={this.onRadiusChange.bind(this)}
          radius={radius}
        />

        <SwitchInput
          label="Insurance"
          changed={this.onInsuranceChange.bind(this)}
          value={insurance}
        />

        <SwitchInput
          label="Unionized"
          changed={this.onUnionizedChange.bind(this)}
          value={unionized}
        />

        <Rating
          pressed={this.onRatingChange.bind(this)}
          rating={rating}
        />

        <Button style={searchButtonStyle} content="Search" pressed={this.onSearchButtonPress.bind(this)} />

        {this.showRateOptions(rateMin,rateMax)}
        {this.showDateOptions(availabilityMin,availabilityMax)}
      </Card>
    );
  }
}

const mapStateToProps = ({filters}) => ({filters});

export default connect(mapStateToProps, {...searchActions, search})(FiltersScreen);
