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
        radius={25}
        clicked={props.radius}
      />

      <Button
        content="< 50km"
        pressed={props.pressed.bind(null,50)}
        style={style}
        radius={50}
        clicked={props.radius}
      />

      <Button
        content="< 75km"
        pressed={props.pressed.bind(null,75)}
        style={style}
        radius={75}
        clicked={props.radius}
      />

      <Button
        content="< 100km"
        pressed={props.pressed.bind(null,100)}
        style={style}
        radius={100}
        clicked={props.radius}
      />

      <Button
        content="< 150km"
        pressed={props.pressed.bind(null,150)}
        style={style}
        radius={150}
        clicked={props.radius}
      />

      <Button
        content="> 150km"
        pressed={props.pressed.bind(null,40075/2)} //Thug: 40075 Circumference of Earch :)
        style={style}
        radius={40075/2}
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
  backgroundColor: "white"
  },
  text: {
    fontSize: (Platform.OS == 'android' ? 15 : 15),
    textAlign: 'center'
  },
  buttonClicked:{
    backgroundColor: '#426E86'

  }

}

export { Radius };
