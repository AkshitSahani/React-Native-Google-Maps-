import React from 'react';
import {View, Platform} from 'react-native';
import {Button} from './';

const Radius = props => {
  return(
    <View style={style.general}>
      <Button
        content="< 25km"
        pressed={props.pressed.bind(null,25)}
        style={style}
        id={25}
        clicked={props.radius}
      />

      <Button
        content="< 50km"
        pressed={props.pressed.bind(null,50)}
        style={style}
        id={50}
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
        content="< 100km"
        pressed={props.pressed.bind(null,100)}
        style={style}
        id={100}
        clicked={props.radius}
      />

      <Button
        content="< 150km"
        pressed={props.pressed.bind(null,150)}
        style={style}
        id={150}
        clicked={props.radius}
      />

      <Button
        content="> 150km"
        pressed={props.pressed.bind(null,40075/2)} //Thug: 40075 Circumference of Earch :)
        style={style}
        id={40075/2}
        clicked={props.radius}
      />
    </View>
  );
};

const style = {
  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
  alignSelf: 'center',
  borderWidth: 0.5,
  justifyContent: 'center',
  height:65,
  width:65,
  backgroundColor: "white",
  borderWidth: 0.2,
  borderColor: '#F9BA32'
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
