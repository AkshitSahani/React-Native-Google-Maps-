import React from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';

const renderRateOptions = (rateType,select) => {
  let i = 10;
  let options = [];
  let option;

  for (i=10; i<= 300; i += 10) {
    option = (<Text
      key={rateType + '-' + i}
      style={style.text}
      onPress={select.bind(null, i)}
    >
      {'$ ' + i}
    </Text>);

    options.push(option);
  }
  console.log('select options: ', options);
  return options;
}
// onPress={select.bind(null, i)}
// {renderRateOptions('rateMax', props.selectMax)}

const Rate = props => {

  return(
    <View style={style.general}>
      <ScrollView >
        {renderRateOptions('rateMin',props.selectMax)}
      </ScrollView>

      <ScrollView >
        {renderRateOptions('rateMax',props.selectMin)}
      </ScrollView>
    </View>
  );
};

const style = {
  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height:'29%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor:'white',
    margin:0,
    paddingVertical: 10,


  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#426E86'
  }
}

export { Rate };
