import React from 'react';
import {View,Text, Platform} from 'react-native';
import DatePicker from 'react-native-datepicker'

const Date = props => {

  return(
    <View style={style}>
      <Text style={{alignSelf: 'center', marginLeft: 25, marginBottom:5}}>{props.label}</Text>
      <DatePicker
        style={{width:150}}
        date={props.value}
        mode="date"
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 32
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={props.changed}
      />
    </View>
  )
};

const style = {
  alignSelf: 'center',
  // flexDirection: 'row',
  alignItems: 'center',
  // justifyContent: 'space-around'
}
export {Date};
