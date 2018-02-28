import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Navbar extends Component {

  state = {
    navBarExpanded: false
  };

  componentWillMount = () => {
    if(this.props.navBarExpanded){
      return this.setState({navBarExpanded: true})
    }
  };

  render(){

    let styles;

    if(this.state.navBarExpanded){
      styles = {
        outerContainer: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'white',
          width: '50%',
          height: '100%',
          zIndex: 123552365234
        },
        navTop: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '10%'
        },
        details: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginLeft: '10%'
        }
      }
    }
    else{
      styles={
        outerContainer: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          position: 'absolute',
          top: 0,
          left: '-100%',
          backgroundColor: 'white',
          width: '0%',
          height: '100%',
          zIndex: 123552365234
        },
        navTop: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '10%'
        },
        details: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginLeft: '10%'
        }
      }
    };

    return(
      <View style={styles.outerContainer}>
        <View style={{height: '40%', justifyContent: 'space-around', marginLeft: '5%'}}>

          <View style={styles.navTop}>
            <Image source={{uri: 'https://torinit.com/assets/workorbe/user-1.jpeg'}} style={{width: 50, height: 50}}/>
            <View style={styles.details}>
              <Text>Name</Text>
              <Text>4.7/5 (32)</Text>
            </View>
          </View>

          <Text>My Bookings</Text>

          <Text>My Messages</Text>

          <Text>My Connections</Text>

          <Text>My Settings</Text>

          <Text>Help</Text>
        </View>

        <Text style={{marginTop: '150%', marginLeft: '5%'}}>Contact Us</Text>
      </View>
    )
  };


}

export { Navbar };
