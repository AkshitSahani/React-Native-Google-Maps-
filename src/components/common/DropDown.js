import React from 'react';
import {View, Text, Picker, Platform} from 'react-native';

const DropDown = (props) => {

    return(
      <View style={style}>
        <Text>{' '+props.label}</Text>
        <Picker
          selectedValue={prop.value}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

      </View>
    )
};

const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export {DropDown};
