import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Card, CardItem} from './common';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.009887;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {

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
      }
    );
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  };

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
            provider={ PROVIDER_GOOGLE }
            style={ styles.container }
            showsUserLocation={ true }
            region={ this.state.region }
            // onRegionChange={ region => this.setState({region}) }
            // onRegionChangeComplete={ region => this.setState({region}) }
          >
            <MapView.Marker
              coordinate={ this.state.region }
            />
          </MapView>
        </CardItem>
      </Card>
    )
  }
};

export default Map;
