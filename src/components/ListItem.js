import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View,TextInput, Text, Platform} from 'react-native';
import {Card, CardItem, Button, Header} from './common';

class ListItem extends Component {

  render() {
    const { capability,rate,rating, name, experience } = this.props.user;
    return (
      <Card style={style.general}>

        <CardItem style={style.cardItem}><Text>Picture</Text></CardItem>

        <CardItem style={style.cardItem}>
          <Text> {name}</Text>
          <Text>{capability}</Text>
          <Text>{rating} stars</Text>
          <Button style={{marginLeft: '5%'}} content="Book" pressed={() => {Actions.LoginForm()}}/>
        </CardItem>

        <CardItem style={style.cardItem}>
          <Text>$ {rate}</Text>
          <Text>{} Km away</Text>
          <Text>Exp {experience} years</Text>
          <Button style={{marginLeft: '5%'}} content="Contact" pressed={() => {Actions.LoginForm()}}/>
        </CardItem>

      </Card>
    );
  }
}

const style = {

  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'space-around',
    display: 'flex'
  },
  button: {
  alignSelf: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'space-between'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardItem: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center'
  }

}

export default ListItem;
