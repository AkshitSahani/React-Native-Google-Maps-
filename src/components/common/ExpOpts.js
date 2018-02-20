import React from 'react';
import {View, Text, Platform, FlatList} from 'react-native';
import {Button} from './';

const ExpOpts = props => {

  let expMin = [{display:'any',value:0}];

  for (let i = 2; i <= 16; i += 2) {
    expMin.push({display: i + ' years', value: i});
  }

  return(

    <View style={style.overall}>
      <View style={{height: '15%'}}>
        <Text style={style.text}>Experience</Text>
        <Text style={style.text}>{(props.expMin === 0 ? 'Any' : props.expMin) + ' years of experience'}</Text>
      </View>

      <View style={{...style.row,height: '70%'}}>

          <FlatList
            data={expMin}
            keyExtractor={item => ('expMin' + item.display)}
            renderItem={({item}) => {
                return (
                  <Text
                    style={props.expMin === item.value ? style.textSelected : style.text}
                    onPress={props.selectMin.bind(null,item.value)}
                  >
                    {item.display}
                  </Text>
                );
              }
            }
          />

      </View>
        <Button
          content="Set Experience"
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
    alignItems: 'center',
    height:(Platform.OS === 'android' ? '72%' : '70%'),
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

export { ExpOpts };
