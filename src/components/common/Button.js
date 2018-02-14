import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';



const Button = (props) => {
  // console.log('props.radius === props.clicked: ',props.radius === props.clicked);
  // console.log('button color', (props.radius === props.clicked ? props.style.buttonClicked : '') );
  // const clickedStyle = props.style ? (props.radius === props.clicked ? props.style.buttonClicked : '') : '';
  // const style = clickedStyle ? {...props.style.button, ...clickedStyle } : {...props.style.button}
  const style = () => {
    if (props.style) {
      if (props.id && props.clicked && props.id === props.clicked) {
        return {
          button: {...props.style.button, ...props.style.buttonClicked.button },
          text: {...props.style.text, ...props.style.buttonClicked.text }
        };
      } else {
        return {
          button: {...props.style.button},
          text: {...props.style.text}
        };
      }
    } else {
      return {
        button: {
          alignSelf: "center",
          backgroundColor: '#F9BA32',
          borderRadius: 5,
          padding: 6
        },
        text: {
          fontSize:20,
          color: 'white'
        }
      };
    }
  }

  return(

//     <TouchableOpacity onPress={props.pressed} style={{alignSelf: "center", backgroundColor: '#F9BA32', borderRadius: 5}}>
//       <Text style={props.style}>

    <TouchableOpacity
      onPress={props.pressed}
      // style={props.style ? {...props.style.button, ...props.style.buttonClicked} : {alignSelf: "center"}}
      style={style().button}
    >
      <Text style={style().text}>

        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
