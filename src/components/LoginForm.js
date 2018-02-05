import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {login} from './actionCreators';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component {
  render() {
    return(
      <Card style={{marginTop:50}}>
        <CardItem>
          <Input label="Email" placeholder="email@gmail.com" changed={(text)=>{this.props.emailChanged(text)}} value={this.props.email}/>
        </CardItem>

        <CardItem>
          <Input secure label="Password" placeholder="password" changed={(text)=>{this.props.passwordChanged(text)}} value={this.props.password}/>
        </CardItem>

        <CardItem>
          {this.props.loading ? <Spinner size="large" /> : null}
          {this.props.error ? <Text style={{color: 'red', fontSize: 14, alignSelf: 'center'}}>{this.props.error.message}</Text> : null}
          <Button content="Sign In" pressed={this.props.loginUser.bind(this, this.props.email, this.props.password)}/>
        </CardItem>
          {this.props.loggedIn ? <Text>Congrats! You logged in!</Text> : null}

        <CardItem>
          <Button content="Create Account" pressed={()=>{Actions.SignUpForm();}}/>
        </CardItem>
      </Card>
    )
  };
};

const mapStateToProps = (state) => {

  const { email, password, loading, error, loggedIn } = state.auth;

  return{
    email: email,
    password: password,
    loading: loading,
    error: error,
    loggedIn: loggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    emailChanged: (text) => dispatch({type: 'emailChanged', value: text}),
    passwordChanged: (text) => dispatch({type: 'passwordChanged', value: text}),
    loginUser: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
