import React, {Component} from 'react';
import {Text, Image, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {login} from './actionCreators';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component {

// Platform.OS == 'android' ? 40 : 40
  render() {
    return(
      <Card style={{backgroundColor: 'white', height: '100%'}}>
        <Image source={{uri: 'https://torinit.com/assets/workorbe/Blue-Hexagon-Top.png'}} style={{height: 135, width: 250, position: 'absolute', resizeMode: 'contain', top: 0, right: (Platform.OS == 'android' ? -75 : -72)}}/>
        <Image source={{uri: 'https://torinit.com/assets/workorbe/New-Logo.png'}} style={{height: 150, width: 300, alignSelf: 'center', resizeMode: 'contain', marginTop: 18, marginBottom: -20}}/>
        <CardItem>
          <Input placeholder="Email" changed={(text)=>{this.props.emailChanged(text)}} value={this.props.email}/>
        </CardItem>

        <CardItem>
          <Input secure placeholder="Password" changed={(text)=>{this.props.passwordChanged(text)}} value={this.props.password}/>
        </CardItem>

        <Text style={{color: '#426E86', alignSelf: 'flex-end', marginRight: '9.5%', fontSize: 16, marginBottom: 30}}>Forgot Password?</Text>

          {this.props.loading ? <Spinner size="large" /> : null}
          <Button content="Sign in" pressed={this.props.loginUser.bind(this, this.props.email, this.props.password)} style={style}/>

          {/* {this.props.loggedIn ? <Text>Congrats! You logged in!</Text> : null} */}

        <CardItem>
          <TouchableOpacity onPress={()=>{this.props.moveToSignUp()}}><Text style={{alignSelf: 'center', fontSize: 18, color:'#426E86', fontWeight: 'bold'}}>Create Account</Text></TouchableOpacity>
        </CardItem>
        {this.props.error ? <Text style={{color: 'red', fontSize: 14, alignSelf: 'center', marginTop: 20, width: '85%'}}>{this.props.error.message}</Text> : null}
        <Image source={{uri: 'https://torinit.com/assets/workorbe/Blue-Hexagon-Bottom.png'}} style={{height: 400, width: 150, position: 'absolute', left: 0, bottom: -145, resizeMode: 'contain'}}/>
      </Card>
    )
  };
};

const style = {
  button:{
    alignSelf: "center",
    backgroundColor: '#F9BA32',
    borderRadius: 5,
    width: '80%',
    marginBottom: 12,
    height: '9%',
    paddingTop: '4%',
  },
  text:{
    fontSize:20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  }
}

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
    loginUser: (email, password) => dispatch(login(email, password)),
    moveToSignUp: () => {dispatch({type: 'movingToSignUp'}); return Actions.SignUpForm();},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
