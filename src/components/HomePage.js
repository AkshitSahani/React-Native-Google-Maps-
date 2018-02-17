import React from 'react';
import {View, Image, Platform} from 'react-native';
import {Button, Spinner, Header, Card, CardItem} from './common';
import {Actions} from 'react-native-router-flux'

const HomePage = () => {
  return(
    <Card style={cardStyle}>
      <Image source={{uri: 'https://torinit.com/assets/workorbe/Blue-Hexagon-Top.png'}} style={imageTopRightStyle}/>
      <Image source={{uri: 'https://torinit.com/assets/workorbe/New-Logo.png'}} style={imageMiddleStyle}/>
      <Button content="Gig Seeker" style={style}/>
      <Button content="Gig Provider" pressed={()=>{Actions.main()}} style={style}/>
      <Image source={{uri: 'https://torinit.com/assets/workorbe/Orange-Hexagon-Bottom.png'}} style={imageBottomLeftStyle}/>
    </Card>
  )
};

let cardStyle;
let imageTopRightStyle;
let imageBottomLeftStyle;
let imageMiddleStyle;

if (Platform.OS === 'android') {
  cardStyle = {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    backgroundColor:'white',
    height: '100%',
    // width: '100%'
  }

  imageTopRightStyle = {
    height: 135,
    width: 250,
    position: 'absolute',
    resizeMode: 'contain',
    top: 0,
    right: -76
  }

  imageBottomLeftStyle = {
    height: 400,
    width: 150,
    position: 'absolute',
    left: -65,
    top: '68%',
    resizeMode: 'contain'
  }

  imageMiddleStyle = {
    height: 150,
    width: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 130,
    marginBottom: 220
  }

} else {
  cardStyle = {
    backgroundColor:'white',
    height: '100%'
  }

  imageTopRightStyle = {
    height: 135,
    width: 250,
    position: 'absolute',
    resizeMode: 'contain',
    top: 18,
    right: -72
  }

  imageBottomLeftStyle = {
    height: 400,
    width: 150,
    position: 'absolute',
    left: -32,
    top: '61%',
    resizeMode: 'contain'
  }

  imageMiddleStyle = {
    height: 150,
    width: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 150,
    marginBottom: 175
  }
}

const style = {
  button: {
    alignSelf: "center",
    backgroundColor: '#F9BA32',
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    height: '8.5%',
    paddingTop: '4%',
    zIndex: 10
  },
  text: {
    fontSize:20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
}


export default HomePage;
