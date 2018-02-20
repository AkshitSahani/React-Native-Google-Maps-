import React from 'react';
import {View, Platform, Text} from 'react-native';
import {Button} from './';

const Radius = props => {
  return(
    <View style={{flexDirection: 'column', width: '80%', marginLeft: '10%', marginBottom: 10}}>
    <Text style={{fontSize: 19, color: 'grey', marginLeft: '2%'}}>Search Radius</Text>
    <View style={style.general}>
      <Button
        content="< 25km"
        pressed={props.pressed.bind(null,25)}
        style={style}
        id={25}
        clicked={props.radius}
      />

      <Button
        content="< 75km"
        pressed={props.pressed.bind(null,75)}
        style={style}
        id={75}
        clicked={props.radius}
      />

      <Button
        content="< 125km"
        pressed={props.pressed.bind(null,125)}
        style={style}
        id={125}
        clicked={props.radius}
      />

      <Button
        content="< 175km"
        pressed={props.pressed.bind(null,175)}
        style={style}
        id={175}
        clicked={props.radius}
      />

      <Button
        content="> 175km"
        pressed={props.pressed.bind(null,40075/2)}
        style={style}
        id={40075/2}
        clicked={props.radius}
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
    marginVertical: 15,
    width: '80%',
    marginLeft: '1.5%'
  },
  button: {
  alignSelf: 'center',
  borderWidth: 0.5,
  justifyContent: 'center',
  height:65,
  width:'24%',
  backgroundColor: "white",
  borderRadius: 5,
  borderColor: '#F9BA32',
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
}

export { Radius };
