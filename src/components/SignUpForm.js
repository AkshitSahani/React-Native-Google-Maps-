import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {signUp} from './actionCreators';

class SignUpForm extends Component {
  render(){
    return (
      <Card style={{...this.props.style, height: '100%'}}>
        <Image source={{uri: 'https://torinit.com/assets/workorbe/Blue-Hexagon-Top.png'}} style={{height: 135, width: 250, position: 'absolute', resizeMode: 'contain', top: 0, right: -72}}/>
        <Image source={{uri: 'https://torinit.com/assets/workorbe/New-Logo.png'}} style={{height: 150, width: 300, alignSelf: 'center', resizeMode: 'contain', marginTop: 18, marginBottom: -20}}/>
        <CardItem>
          <Input placeholder="Name" value={this.props.name} changed={(text)=>{this.props.nameChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input placeholder="Company" value={this.props.company} changed={(text)=>{this.props.companyChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input placeholder="Phone" value={this.props.phone} changed={(text)=>{this.props.phoneChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input placeholder="Email" value={this.props.email} changed={(text)=>{this.props.emailChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input secure placeholder="Password" value={this.props.password} changed={(text)=>{this.props.passwordChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input secure placeholder="Confirm Password" value={this.props.passwordConfirmation} changed={(text)=>{this.props.confirmationChanged(text)}}/>
        </CardItem>


          {this.props.loading ? <Spinner size="large" /> : null}
          <Button content="Sign Up" pressed={this.props.signUpUser.bind(this, this.props.email, this.props.password, this.props.phone, this.props.company, this.props.name)} style={style}/>

        {this.props.error ? <Text style={{color: 'red', fontSize: 12, alignSelf: 'center', width: '80%'}}>{this.props.error.message}</Text> : null}
        {this.props.passwordNotConfirmed ? <Text style={{color: 'red', fontSize: 12, alignSelf: 'center'}}>{"Password and Password Confirmation don't match! Please try again"}</Text> : null}
        <Image source={{uri: 'https://torinit.com/assets/workorbe/Blue-Hexagon-Bottom.png'}} style={{height: 400, width: 150, position: 'absolute', left: 0, bottom: -205, resizeMode: 'contain'}}/>
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
    marginBottom: 8,
    height: '9%',
    paddingTop: '4%',
    zIndex: 10,
    marginTop: 12,
  },
  text:{
    fontSize:20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  }
}

const mapStateToProps = (state) => {
  const {email, password, loading, error, signedUp, name, phone, company, passwordConfirmation, passwordNotConfirmed} = state.auth;
  return{
    email: email,
    password: password,
    loading: loading,
    error: error,
    signedUp: signedUp,
    name: name,
    company: company,
    phone: phone,
    passwordConfirmation: passwordConfirmation,
    passwordNotConfirmed: passwordNotConfirmed
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    emailChanged: (text) => dispatch({type: 'emailChanged', value: text}),
    passwordChanged: (text) => dispatch({type: 'passwordChanged', value: text}),
    signUpUser: (email, password, phone, company, name) => dispatch(signUp(email, password, phone, company, name)),
    nameChanged: (text) => dispatch({type: 'nameChanged', value: text}),
    companyChanged: (text) => dispatch({type: 'companyChanged', value: text}),
    phoneChanged: (text) => dispatch({type: 'phoneChanged', value: text}),
    confirmationChanged: (text) => dispatch({type: 'confirmationChanged', value: text})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
