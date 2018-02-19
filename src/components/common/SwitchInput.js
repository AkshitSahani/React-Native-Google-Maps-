import React from 'react';
import {View,Text, Platform, Switch} from 'react-native';

const SwitchInput = (props) => {

    return(
      <View style={style}>
        <Text style={{fontSize: 18}}>{props.label}</Text>
        <View style={{flexDirection: 'row'}}>
          {/* <Text style={{fontSize: 18}}>OFF</Text> */}
          <Switch style={{height: (Platform.OS == 'android' ? 40 : 20), width: 150, marginLeft: 10}} onValueChange={props.changed} value={props.value} onFocus={props.focussed}/>
          {/* <Text style={{fontSize: 18}}>ON</Text> */}
        </View>
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
