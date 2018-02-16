import React from 'react';
import {View, Text, Platform, FlatList} from 'react-native';
import {Button} from './';

// onPress={select.bind(null, i)}
// {renderRateOptions('rateMax', props.selectMax)}

const Rate = props => {

  let ratesMin = [];
  let ratesMax = [];

  let i = 10;

  for (i=10; i<= 300; i += 10) {
    ratesMax.push({rate:i});
    ratesMin.push({rate:i-5});
  }

  return(

    <View style={style.overall}>
      <View style={{height: '15%'}}>
        <Text style={style.text}>Hourly Rate</Text>
        <Text style={style.text}>{'$' + props.rateMin + ' - $' + props.rateMax}</Text>
      </View>

      <View style={{...style.row,height: '12%'}}>
        <Text style={{...style.text,marginHorizontal:'20%'}}>Min</Text>
        <Text style={{...style.text,marginHorizontal:'20%'}}>Max</Text>
      </View>

      <View style={{...style.row,height: '50%'}}>

          <FlatList
            data={ratesMin}
            keyExtractor={item => ('rateMin' + item.rate)}
            renderItem={({item}) => {
                return (
                  <Text
                    style={props.rateMin === item.rate ? style.textSelected : style.text}
                    onPress={props.selectMin.bind(null,item.rate)}
                  >
                    {'$ ' + item.rate}
                  </Text>
                );
              }
            }
          />

          <FlatList
            data={ratesMax}
            keyExtractor={item => ('rateMax' + item.rate)}
            renderItem={({item}) => {
                return (
                  <Text
                    style={props.rateMax === item.rate ? style.textSelected : style.text}
                    onPress={props.selectMax.bind(null,item.rate)}

                  >
                    {'$ ' + item.rate}
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
            marginVertical:10
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
