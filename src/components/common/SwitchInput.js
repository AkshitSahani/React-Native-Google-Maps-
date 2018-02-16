import React from 'react';
import {View,Text, Platform, Switch} from 'react-native';

const SwitchInput = (props) => {

    return(
      <View style={style}>
        <Text>{props.label}</Text>
        <Switch style={{height: (Platform.OS == 'android' ? 40 : 20), width: 150}} onValueChange={props.changed} value={props.value} onFocus={props.focussed}/>
      </View>
    )
};

const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical:15
}
export {SwitchInput};
