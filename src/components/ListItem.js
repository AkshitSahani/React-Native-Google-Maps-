import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View,TextInput, Text, Platform} from 'react-native';
import {Card, CardItem, Button, Header} from './common';

class ListItem extends Component {
  state = {
    clicked: false
  }

  Onclick() {
    console.log(this.state);
    this.setState({ clicked: !this.state.clicked});
  }

  showButton(clicked) {
    if (clicked) {
      return(
        <View style={style.button}>
          <Button style={{marginLeft: '5%'}} content="Book" pressed={() => {Actions.LoginForm()}}/>
          <Button style={{marginLeft: '5%'}}content="Contact" pressed={() => {Actions.LoginForm()}}/>
        </View>
      );
    }

  }

  render() {
    const { capability,rate,rating,insurance,unionized,availabilityMin,availabilityMax } = this.props.user;
    console.log('render!!!!!!');
    return (
      <CardItem style={style.general}>
        <Text
          style={style.name}
          onPress={this.Onclick.bind(this)}
        >
          {this.props.user.name}
        </Text>

        <Text onPress={this.Onclick.bind(this)}> {' capability: ' + capability + '  rate: $'+ rate + '  rating: ' + rating + (insurance ? '  insurance: Yes' : '  insurance: No')}</Text>
        <Text onPress={this.Onclick.bind(this)}>{(unionized ? 'unionized: Yes' : 'unionized: No') + '  availabile from '+ availabilityMin + ' to '+ availabilityMax}</Text>
        {this.showButton(this.state.clicked)}
      </CardItem>
    );
  }
}

const style = {

  general: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  },
  button: {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'space-between'

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default ListItem;
