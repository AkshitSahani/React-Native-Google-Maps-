import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View,TextInput, Text, Platform} from 'react-native';
import {Card, CardItem, Button, Header} from './common';

class ListItem extends Component {

  render() {
    const { capability,rate,rating, name, experience, radius } = this.props.user;
    const roundedRadius = radius ? radius.toFixed(2) : '';
    return (
      <Card style={style.general}>

        <CardItem style={style.cardItem}><Text>Picture</Text></CardItem>

        <CardItem style={style.cardItem}>
          <Text> {name}</Text>
          <Text>{capability}</Text>
          <Text>{rating} stars</Text>
          <Button style={style} content="Book" pressed={() => {Actions.LoginForm()}}/>
        </CardItem>

        <CardItem style={style.cardItem}>
          <Text>$ {rate}</Text>
          <Text>{roundedRadius} Km away</Text>
          <Text>Exp {experience} years</Text>
          <Button style={style} content="Contact" pressed={() => {Actions.LoginForm()}}/>
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
    // height: 10
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    backgroundColor: '#F9BA32',
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    color: 'white'
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
