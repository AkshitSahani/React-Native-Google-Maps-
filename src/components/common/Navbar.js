import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from './';

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
          zIndex: 123552365234,
        },
        navTop: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '15%',
          marginTop: '5%'
        },
        details: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginLeft: '10%'
        }
      }
    };

    let style = {
      button: {
        // marginTop: '5%'
      },
      text: {
        color: '#426E86',
        fontSize: 17
      }
    };

    return(
      <View style={styles.outerContainer}>
        <View style={{height: '43%', justifyContent: 'space-around', marginLeft: '5%'}}>

          <View style={styles.navTop}>
            <Image source={{uri: 'https://torinit.com/assets/workorbe/user-1.jpeg'}} style={{width: 50, height: 50}}/>
            <View style={styles.details}>
              <Text>Name</Text>
              <Text>4.7/5 (32)</Text>
            </View>
          </View>

          <Button content="My Bookings" style={style}/>

          <Button content="My Messages" style={style}/>

          <Button content="My Connections" style={style}/>

          <Button content="My Settings" style={style}/>

          <Button content="Help" style={style}/>

        </View>

        <Button content="Contact Us" style={{button:{marginTop: '150%', marginLeft: '5%'}, text: {color: '#F9BA32', fontSize: 18}}}/>
      </View>
    )
  };


}

export { Navbar };
