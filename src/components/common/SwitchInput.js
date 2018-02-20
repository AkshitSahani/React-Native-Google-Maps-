import React from 'react';
import {View,Text, Platform, Switch} from 'react-native';

const SwitchInput = (props) => {

    return(
        <View style={style}>
          <Text style={{fontSize: 18, }}>{props.label}</Text>
          {/* <View style={{flexDirection: 'row'}}> */}
          <Switch style={{height: (Platform.OS === 'android' ? 40 : 20), width: 150, marginLeft: 10, alignSelf: 'flex-end'}} onValueChange={props.changed} value={props.value} onFocus={props.focussed}/>
          {/* </View> */}
        </View>
    )
};



const style = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  // alignItems: 'center',
  marginVertical:15,
  marginLeft: '11%',
  width: (Platform.OS === 'android' ? '80%' : '105%')
}
export {SwitchInput};
