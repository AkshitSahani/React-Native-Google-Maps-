import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity onPress={props.pressed} style={{alignSelf: "center"}}>
      <Text>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
