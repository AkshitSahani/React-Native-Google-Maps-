import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Card, CardItem} from './common';
import {locationChange} from '../actionCreators/searchFilter';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.009887;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {

  // mapRef = null;

  onLocationChange(location) {
    this.props.locationChange(location);
  }

  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });

        this.onLocationChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });

        // this.onLocationChange({
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude
        // });
      }
    );

    // this.mapRef.fitToSuppliedMarkers(
    //     this.renderMarkers(),
    //     false,
    // );
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  };

  renderMarkers(){
    return this.props.users.map(user => {
      return (
        <MapView.Marker
          key={ user.name + user.capability}
          coordinate={ user.coordinates }
          title={user.name}
        />
      );
    });
  }

  render(){

    const styles = StyleSheet.create({
      container: {
        height: this.props.height,
        width: this.props.width,
      }
    });

    return(
      <Card>
        <CardItem>
          <MapView
            // ref={ref => { this.mapRef = ref }}
            provider={ PROVIDER_GOOGLE }
            style={ styles.container }
            showsUserLocation={ true }
            region={ this.state.region }

            // onRegionChange={ region => this.setState({region}) }
            // onRegionChangeComplete={ region => this.setState({region}) }
          >
            {/* <MapView.Marker
              coordinate={ this.state.region }
            /> */}
            {this.props.users.length > 0 ? this.renderMarkers() : null}
          </MapView>
        </CardItem>
      </Card>
    )
  }
};

const mapStateToProps = state => {
  // const {location, unionized, insurance, endDate, startDate, rating, rateMax, rateMin, capability, radius} = state.filters;
  console.log('users in search results: ',state.search);
  return ({
    users:state.search.users
  });
};

export default connect(mapStateToProps, {locationChange})(Map);
