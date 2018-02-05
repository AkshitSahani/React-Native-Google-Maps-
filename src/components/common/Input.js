import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = (props) => {

    return(
      <View style={{alignSelf: 'center'}}>
        <Text>{props.label}</Text>
        <TextInput secureTextEntry={props.secure} autoCorrect={false} style={{height: 20, width: 100}} onChangeText={props.changed} value={props.value} placeholder={props.placeholder} onFocus={props.focussed}/>
      </View>
    )
};

export {Input};
