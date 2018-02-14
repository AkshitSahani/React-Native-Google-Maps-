import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity onPress={props.pressed} style={{alignSelf: "center", backgroundColor: '#F9BA32', borderRadius: 5}}>
      <Text style={props.style}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
