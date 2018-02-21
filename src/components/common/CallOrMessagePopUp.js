import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CallOrMessagePopUp = (props) => {
  return(
    <View style={styles.topView}>
      <Text style={{fontSize: 18, marginBottom: 20, marginRight: 15}}> Contact James</Text>
      <View style={styles.insideView}>
        <View style={styles.bottomView}>
          <Image source={{uri: 'https://torinit.com/assets/workorbe/phone-receiver.png'}} style={{height: 50, width: 50}}/>
          <Text style={{fontSize: 18}}>Call</Text>
        </View>

        <View style={styles.bottomView}>
          <Image source={{uri: 'https://torinit.com/assets/workorbe/Message.png'}} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
          <Text style={{fontSize: 18}}>Message</Text>
        </View>
      </View>
    </View>
  )
};

const styles = {
  topView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: '30%',
    zIndex: 100,
    backgroundColor: 'white',
    width: '100%',
    height: 200
  },
  insideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  bottomView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '10%'
  }
};

export { CallOrMessagePopUp };
