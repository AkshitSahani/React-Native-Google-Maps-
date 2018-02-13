import React from 'react';
import {View, TextInput, Text, Platform} from 'react-native';

const Input = (props) => {

    return(
      <View style={style}>
        <Text>{props.label}</Text>
        <TextInput secureTextEntry={props.secure} autoCorrect={false} style={{height: (Platform.OS == 'android' ? 40 : 20), width: 150}} onChangeText={props.changed} value={props.value} placeholder={props.placeholder} onFocus={props.focussed}/>
      </View>
    )
};

const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export {Input};
