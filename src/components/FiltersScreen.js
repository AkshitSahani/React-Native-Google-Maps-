import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text, Switch, Picker,Platform } from 'react-native';
import {Header, Input, Card, Button, SwitchInput, Date, SlideBar, Radius, Rate } from './common';
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
  }

  showRateOptions() {
    // return (this.state.rateClicked ? <Rate/> : '' );
    if (this.state.rateClicked) {
      return (
        <Rate
          selectMax={this.onRateMinChange.bind(this)}
          selectMin={this.onRateMaxChange.bind(this)}
        />
      );
    }
  }

  onDateButtonPress() {
    // this.props.search({...this.props.filters});
    console.log('Date clicked');
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

    const buttonStyle = {
      button: {
        alignSelf: "center",
        backgroundColor: '#F9BA32',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 50
      },
      text:{
        fontSize: 20,
        color: 'white'
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
        <Header title="Filters Screen" />

        <Input
          label="Capability"
          changed={this.onCapabilityChange.bind(this)}
          value={capability}
          placeholder="e.g. electrician"
        />

        <View style={{alignSelf: 'center',justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <Button
            style={buttonStyle}
            content="$ Rate"
            pressed={this.onRateButtonPress.bind(this)}
          />


          <Button
            style={buttonStyle}
            content="Date"
            pressed={this.onDateButtonPress.bind(this)}
          />
        </View>


        <Input
          label="Experience"
          changed={this.onExperienceChange.bind(this)}
          value={experience}
          placeholder="e.g. 10 (years without units)"
        />

        <Date
          label="Start Date"
          changed={this.onAvailabilityMinChange.bind(this)}
          value={availabilityMin}
        />

        <Date
          label={"\xa0"+"End Date"}
          changed={this.onAvailabilityMaxChange.bind(this)}
          value={availabilityMax}
        />

        <Input
          label="Rate"
          // changed={this.onRateChange.bind(this)}
          // value={rate}
          placeholder="e.g. $200 (without units)"
        />

        <View
          style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center'
          }}
        >
          <Text>{'Rating ' + rating.toString()}</Text>
          <Picker
            style={{height: (Platform.OS == 'android' ? 40 : 20), width: 50}}
            selectedValue={rating.toString()}
            onValueChange={ this.onRatingChange.bind(this) }>
            <Picker.Item label="5" value="5" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="1" value="1" />
          </Picker>
        </View>

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

        <Button content="Search" pressed={this.onSearchButtonPress.bind(this)} />

        {this.showRateOptions()}
      </Card>
    );
  }
}

const mapStateToProps = ({filters}) => ({filters});

export default connect(mapStateToProps, {...searchActions, search})(FiltersScreen);
