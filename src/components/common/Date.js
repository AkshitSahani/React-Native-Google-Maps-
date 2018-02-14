import React from 'react';
import {View,Text, Platform} from 'react-native';
import DatePicker from 'react-native-datepicker'

const Date = props => {
  
  return(
    <View style={style}>
      <Text>{props.label}</Text>
      <DatePicker
        style={{width: 200}}
        date={props.value}
        mode="date"
        placeholder="select date"
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
            marginLeft: 36
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
  flexDirection: 'row',
  alignItems: 'center'
}
export {Date};
