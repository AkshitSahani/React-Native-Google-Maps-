import React from 'react';
import {View, Platform, Text} from 'react-native';
import {Button} from './';

const Rating = props => {
  return(
    <View style={{marginBottom: 15}}>
      <Text style={{
        fontSize: 20,
        marginLeft: 70,
        marginBottom:5,
        color: '#426E86'
      }}> Rating </Text>
      <View style={style.general}>
        <Button
          content="Any"
          pressed={props.pressed.bind(null,1)}
          style={style}
          id={1}
          clicked={props.rating}
        />

        <Button
          content="2+"
          pressed={props.pressed.bind(null,3)}
          style={style}
          id={3}
          clicked={props.rating}
        />

        <Button
          content="3+"
          pressed={props.pressed.bind(null,4)}
          style={style}
          id={4}
          clicked={props.rating}
        />

        <Button
          content="4+"
          pressed={props.pressed.bind(null,5)}
          style={style}
          id={5}
          clicked={props.rating}
        />
      </View>
    </View>
  );
};

const style = {
  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
  alignSelf: 'center',
  borderWidth: 0.5,
  justifyContent: 'center',
  height:65,
  width:65,
  backgroundColor: "white",
  borderWidth: 0.2,
  borderColor: '#F9BA32'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#426E86'
  },
  buttonClicked:{
    button:{
      backgroundColor: '#426E86'
    },
    text:{
      color: 'white'
    }
  }
}

export { Rating };
