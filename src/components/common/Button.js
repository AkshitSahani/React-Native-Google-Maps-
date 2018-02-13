import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity onPress={props.pressed} style={{alignSelf: "center"}}>
      <Text style={{fontSize: (Platform.OS == 'android' ? 20 : 20)}}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
