import React from 'react';
import {View, Text, Platform, FlatList} from 'react-native';
import {Button} from './';

// onPress={select.bind(null, i)}
// {renderRateOptions('rateMax', props.selectMax)}

const Rate = props => {

  let ratesMin = [{diaplay:'Any', value:0}];
  let ratesMax = [{diaplay:'Any', value:100000000000000}];

  for (let i=10; i<= 300; i += 10) {
    ratesMin.push({diaplay:'$ ' + (i-5), value:i-5});
    ratesMax.push({diaplay:'$ ' + i, value:i});
  }

  return(

    <View style={style.overall}>
      <View style={{height: '15%'}}>
        <Text style={style.text}>Hourly Rate</Text>
        <Text style={style.text}>{(props.rateMin === 0 ? 'Any' : '$' + props.rateMin) + ' - ' + (props.rateMax === 100000000000000 ? 'Any' : '$' + props.rateMax)}</Text>
      </View>

      <View style={{...style.row,height: '12%'}}>
        <Text style={{...style.text,marginHorizontal:'20%'}}>Min</Text>
        <Text style={{...style.text,marginHorizontal:'20%'}}>Max</Text>
      </View>

      <View style={{...style.row,height: '50%'}}>

        <FlatList
          data={ratesMin}
          keyExtractor={item => ('rateMin' + item.value)}
          renderItem={({item}) => {
              return (
                <Text
                  style={props.rateMin === item.value ? style.textSelected : style.text}
                  onPress={props.selectMin.bind(null,item.value)}
                >
                  {item.diaplay}
                </Text>
              );
            }
          }
        />

        <FlatList
          data={ratesMax}
          keyExtractor={item => ('rateMax' + item.value)}
          renderItem={({item}) => {
              return (
                <Text
                  style={props.rateMax === item.value ? style.textSelected : style.text}
                  onPress={props.selectMax.bind(null,item.value)}
                >
                  {item.diaplay}
                </Text>
              );
            }
          }
        />

      </View>
      <Button
        content="Set Rate"
        pressed={props.close}
        style={{
          button: {
            alignSelf: 'center',
            backgroundColor: '#F9BA32',
            borderRadius: 5,
            paddingVertical: 10,
            // paddingHorizontal: 40,
            width:'85%',
            height: 45,
            marginVertical:20
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
    height:(Platform.OS === 'android' ? '72%' : '70%'),
    width:'100%',
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
    // justifyContent: 'center',
    justifyContent: 'space-around',
    // alignItems: 'center',
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

export { Rate };
