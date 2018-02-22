import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View,TextInput, Text, Platform, Image} from 'react-native';
import {Card, CardItem, Button, Header} from './common';

class ListItem extends Component {

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { capability,rate,rating, name, experience, radius, image } = this.props.user;
    const roundedRadius = radius ? radius.toFixed(2) : '';
    return (
      <Card style={style.general}>

        <CardItem style={style.cardItem}>
          <Image source={{uri: image}} style={{width: 60, height: 50, marginTop: 3}}/>
        </CardItem>

        <CardItem style={style.cardItem}>
          <Text style={style.content}> {name}</Text>
          <Text style={style.content}>{this.capitalize(capability)}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}><Image source={{uri: 'https://torinit.com/assets/workorbe/Star.png'}} style={{height: 15, width: 15}}/><Text style={style.content}> {rating}</Text></View>
          <Button style={style} content="Book" pressed={this.props.clicked}/>
        </CardItem>

        <CardItem style={style.cardItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}><Image source={{uri: 'https://torinit.com/assets/workorbe/Dollar.png'}} style={{height: 14, width: 7}}/><Text style={style.content}> {rate}</Text></View>
          <Text style={style.content}>{roundedRadius} Km away</Text>
          <Text style={style.content}>Exp {experience} years</Text>
          <Button style={style} content="Contact" pressed={()=>{this.method()}}/>
        </CardItem>

      </Card>
    );
  }
}

const style = {

  general: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    backgroundColor: '#F9BA32',
    borderRadius: 5,
    width: 100,
    marginTop: 3
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign:'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardItem: {
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  content:{
    fontSize: 16,
    // textAlign: 'right'
  }

}

export default ListItem;
