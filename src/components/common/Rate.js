import React from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';


// onPress={select.bind(null, i)}
// {renderRateOptions('rateMax', props.selectMax)}

const Rate = props => {

  const renderRateOptions = (rateType,select) => {
    let i = 10;
    let options = [];
    let option;

    for (i=10; i<= 300; i += 10) {
      option = (<Text
        key={rateType + '-' + i}
        style={(rateType === 'rateMin' && props.rateMin === i) || (rateType === 'rateMax' && props.rateMax === i) ? style.textSelected : style.text}
        onPress={select.bind(null, i)}

      >
        {'$ ' + i}
      </Text>);

      options.push(option);
    }
    console.log('select options: ', options);
    return options;
  }

  return(

    <View style={style.overall}>

      <Text style={style.text}>{props.rateMin + ' - ' + props.rateMax}</Text>

      <View style={style.row}>
        <Text style={style.text}>Min</Text>
        <Text style={style.text}>Max</Text>
      </View>

      <View style={style.row}>
        <ScrollView
        >
          {renderRateOptions('rateMin',props.selectMin)}
        </ScrollView>

        <ScrollView

        >
          {renderRateOptions('rateMax',props.selectMax)}
        </ScrollView>
      </View>
    </View>
  );
};

const style = {
  overall: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    height:'75%',
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
    height:'75'
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

export { Rate };
