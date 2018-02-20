import React from 'react';
import {View, Text} from 'react-native';

const CardItem = (props) => {
  return(
    <View style={props.style}>
      {props.children}
    </View>
  );
};

export {CardItem};
