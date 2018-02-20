import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Date, Button} from './';

// onPress={select.bind(null, i)}
// {renderRateOptions('rateMax', props.selectMax)}

const DatePage = props => {

  return(

    <View style={style.overall}>
      <View style={{...style.row,height: '40%'}}>
        <Date
          label="Start Date"
          changed={props.selectMin}
          value={props.availabilityMin}
        />

        <Date
          label="End Date"
          changed={props.selectMax}
          value={props.availabilityMax}
        />
      </View>
      <Button
        content="Set Date"
        pressed={props.close}
        style={{
          button: {
            alignSelf: 'center',
            backgroundColor: '#F9BA32',
            borderRadius: 5,
            // paddingVertical: 15,
            // paddingHorizontal: 40,
            width:'81%',
            height: 45,
            marginVertical:10,
            justifyContent: 'center'
          },
          text:{
            fontSize: 20,
            color: 'white',
            textAlign: 'center'
          }
        }}
      />
    </View>
  );
};

const style = {
  overall: {
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    height: (Platform.OS === 'android' ? '72%' : '70%'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor:'white',
    margin:0,
    paddingVertical: 10,
  },
  row:{
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  scrollview:{
    height:'75%'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#426E86'
  },
  textSelected: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  }
}

export { DatePage };
