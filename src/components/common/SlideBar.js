import React from 'react';
import {View, Text, Slider, Platform} from 'react-native';

const SlideBar = (props) => {

    return(
      <View style={style}>
        <Text>{props.label}</Text>
        {/* <Text>{props.value}</Text> */}
        <Slider
          maximumValue={props.max}
          minimumValue={props.min}
          style={{height: (Platform.OS == 'android' ? 40 : 20), width: 150}}
          // onSlidingComplete={props.changed}
          onValueChange={props.changed}
          value={props.value}
          onFocus={props.focussed}
        />
      </View>
    )
};

const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'

}

export {SlideBar};
