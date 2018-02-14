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
          <Button style={style.button} content="Book" pressed={() => {Actions.LoginForm()}}/>
        </CardItem>

        <CardItem style={style.cardItem}>
          <Text>$ {rate}</Text>
          <Text>{} Km away</Text>
          <Text>Exp {experience} years</Text>
          <Button style={style.button} content="Contact" pressed={() => {Actions.LoginForm()}}/>
        </CardItem>

      </Card>
    );
  }
}

const style = {

  general: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  button: {
    fontSize: 20,
    borderWidth: 2,
    padding: 10,
    color: 'white',
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardItem: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom: 10
  }

}

export default ListItem;
