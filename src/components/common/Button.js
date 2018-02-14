import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity
      onPress={props.pressed}
      style={props.style ? props.style.button : {alignSelf: "center"}}>
      <Text style={props.style ? props.style.text : {fontSize: (Platform.OS == 'android' ? 20 : 20)}}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
