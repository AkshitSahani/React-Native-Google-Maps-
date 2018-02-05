import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.view}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  view: {
    marginTop: '2%',
    borderWidth: 5,
    borderColor: 'black',
    padding: 10
  }
};

export { Header };
