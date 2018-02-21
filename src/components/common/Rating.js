import React from 'react';
import {View, Platform, Text, Image} from 'react-native';
import {Button} from './';

const Rating = props => {
  return(
    <View style={{marginBottom: 10, width: '80%', marginLeft: '10%'}}>
      <View style={{flexDirection: 'row', marginBottom:10}}>
        <Image source={{uri: 'https://torinit.com/assets/workorbe/Star.png'}} style={{height: 20, width: 20}}/>
        <Text style={{
          fontSize: 20,
          marginLeft: '1.5%',
          marginBottom:0,
          color: 'grey'
        }}> Rating </Text>
      </View>

      <View style={style.general}>
        <Button
          content="Any"
          pressed={props.pressed.bind(null,0)}
          style={firstButtonStyle}
          id={0}
          clicked={props.rating}
        />

        <Button
          content="2+"
          pressed={props.pressed.bind(null,2)}
          style={style}
          id={2}
          clicked={props.rating}
        />

        <Button
          content="3+"
          pressed={props.pressed.bind(null,3)}
          style={style}
          id={3}
          clicked={props.rating}
        />

        <Button
          content="4+"
          pressed={props.pressed.bind(null,4)}
          style={style}
          id={4}
          clicked={props.rating}
        />
      </View>
    </View>
  );
};

const style = {
  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  button: {
  alignSelf: 'center',
  borderWidth: 0.5,
  justifyContent: 'center',
  height:65,
  width:'25%',
  backgroundColor: "white",
  borderColor: '#F9BA32',
  borderRadius: 5,
  marginLeft: 2,
  marginRight: 2
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#426E86'
  },
  buttonClicked:{
    button:{
      backgroundColor: '#426E86'
    },
    text:{
      color: 'white'
    }
  }
};

const firstButtonStyle = {
  button: {
  alignSelf: 'center',
  borderWidth: 0.5,
  justifyContent: 'center',
  height:65,
  width:'46%',
  backgroundColor: "white",
  borderColor: '#F9BA32',
  borderRadius: 5,
  marginLeft: 8,
  marginRight: 2
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#426E86'
  },
  buttonClicked:{
    button:{
      backgroundColor: '#426E86'
    },
    text:{
      color: 'white'
    }
  }
}

export { Rating };
