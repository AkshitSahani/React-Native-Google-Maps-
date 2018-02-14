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
      />

      <Button
        content="< 50km"
        pressed={props.pressed.bind(null,50)}
        style={style}
      />

      <Button
        content="< 75km"
        pressed={props.pressed.bind(null,75)}
        style={style}
      />

      <Button
        content="< 100km"
        pressed={props.pressed.bind(null,100)

        }
        style={style}
      />

      <Button
        content="< 150km"
        pressed={props.pressed.bind(null,150)}
        style={style}
      />

      <Button
        content="> 150km"
        pressed={props.pressed.bind(null,40075/2)} //Thug: 40075 Circumference of Earch :)
        style={style}
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

  },
  text: {
    fontSize: (Platform.OS == 'android' ? 15 : 15),
    textAlign: 'center'
  }

}

export { Radius };
