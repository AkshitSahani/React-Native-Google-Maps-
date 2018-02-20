import React from 'react';
import {View, Text} from 'react-native';

const Card = (props) => {
  return(
    <View style={{backgroundColor: 'white', ...props.style}}>
      { props.children }
    </View>
  )
}

export {Card};
