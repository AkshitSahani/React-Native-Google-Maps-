import React from 'react';
import {View, TextInput, Text, Platform} from 'react-native';

const Input = (props) => {

    return(
      <View style={style}>
        <Text>{props.label}</Text>
        <TextInput secureTextEntry={props.secure}
          autoCorrect={false}
          style={{height: (Platform.OS == 'android' ? 40 : 40), width: '80%', borderBottomWidth: 0.5, fontSize: 18, borderBottomColor: 'grey', marginBottom: 20}}
          onChangeText={props.changed}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#2F3131"
          onFocus={props.focussed}/>
      </View>
    )
};

const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export {Input};
