import React from 'react';
import {View, TextInput, Text, Platform} from 'react-native';

const Input = (props) => {

    return(
      <View style={[style, props.style]}>
        <Text style={{fontSize:15}}>{props.label}</Text>
        <TextInput secureTextEntry={props.secure}
          autoCorrect={false}
          style={{height: (Platform.OS == 'android' ? 40 : 40), width: '80.5%', borderBottomWidth: 0.5, fontSize: 18, marginBottom: 10, borderRadius: 5, marginTop: 10, backgroundColor: 'white', borderColor: 'grey'}}
          onChangeText={props.changed}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="grey"
          onFocus={props.focussed}
          underlineColorAndroid={'rgba(0,0,0,0)'}
          autoFocus={props.autoFocus}
        placeholderStyle={{marginLeft: 5}}/>
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
