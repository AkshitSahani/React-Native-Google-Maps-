import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';



const Button = (props) => {
  console.log('props.radius === props.clicked: ',props.radius === props.clicked);
  // console.log('button color', (props.radius === props.clicked ? props.style.buttonClicked : '') );
  // const clickedStyle = props.style ? (props.radius === props.clicked ? props.style.buttonClicked : '') : '';
  // const style = clickedStyle ? {...props.style.button, ...clickedStyle } : {...props.style.button}
  const style = () => {
    if (props.style) {
      if (props.radius === props.clicked) {
        return {...props.style.button, ...props.style.buttonClicked }
      } else {
        return props.style.button;
      }
    } else {
      return {alignSelf: "center"};
    }

  }

  return(
    <TouchableOpacity
      onPress={props.pressed}
      // style={props.style ? {...props.style.button, ...props.style.buttonClicked} : {alignSelf: "center"}}
      style={style()}
    >
      <Text style={props.style ? props.style.text : {fontSize:20}}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
