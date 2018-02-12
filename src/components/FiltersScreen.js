import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text, Switch, ScrollView, Picker,Platform } from 'react-native';
import {Header, Input, Card, Button, SwitchInput, Date, SlideBar } from './common';
import {Actions} from 'react-native-router-flux';
import * as searchActions from '../actionCreators/searchFilter';

class FiltersScreen extends Component {

  onCapabilityChange(capability) {
    this.props.capabilityChange(capability);
    // console.log('this.props.capability: ',this.props.capability);
  }

  onExperienceChange(experience) {
    this.props.experienceChange(experience);
    // console.log('this.props.experience: ',this.props.experience);
  }

  onRateChange(rate) {
    this.props.rateChange(rate);
    // console.log('this.props.rate: ',this.props.rate);
  }

  onRatingChange(rating) {
    this.props.ratingChange(rating);
    // console.log('this.props.rate: ',this.props.rate);
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

  onLocationChange(location) {
    this.props.locationChange(location);
  }

  onAvailabilityMinChange(availabilityMin) {
    this.props.availabilityMinChange(availabilityMin);
  }

  onAvailabilityMaxChange(availabilityMaxChange) {
    this.props.availabilityMaxChange(availabilityMaxChange);
  }

  onButtonPress() {
    this.props.refineSearch({...this.props.filters});
    Actions.results();
  }
    // const inputFields = {'capability','experience','rate','rating','availabilityMin','availabilityMax','insurance','unionized'];


  render(){

    const { experience,
            rate,
            radius,
            capability,
            insurance,
            unionized,
            rating,
            location,
            availabilityMin,
            availabilityMax
            } = this.props.filters;

    return(
      <Card>
        <Header title="Filters Screen" />
        {/* <ScrollView> */}
        <Input
          label="Capability"
          changed={this.onCapabilityChange.bind(this)}
          value={capability}
          placeholder="e.g. electrician"
        />

        {/* dropdown to show either current location or a user address*/}

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
          label="End Date"
          changed={this.onAvailabilityMaxChange.bind(this)}
          value={availabilityMax}
        />

        <Input
          label="Rate"
          changed={this.onRateChange.bind(this)}
          value={rate}
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

        <SlideBar
          label={'Radius'  + ' ('+ Math.floor(radius) + ' km) '}
          max={120}
          min={1}
          changed={this.onRadiusChange.bind(this)}
          value={radius}
          step={2}
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
        {/* </ScrollView> */}
        <Button content="Search" pressed={this.onButtonPress.bind(this)} />
      </Card>
    );
  }
}

const mapStateToProps = ({filters}) => ({filters});


// export default connect(mapStateToProps, {inputChange,refineSearch})(FiltersScreen);
export default connect(mapStateToProps, searchActions)(FiltersScreen);
