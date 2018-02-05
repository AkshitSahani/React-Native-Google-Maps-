import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {signUp} from './actionCreators';

class SignUpForm extends Component {
  render(){
    return (
      <Card style={this.props.style}>
        <CardItem>
          <Input label="Name" placeholder="Name" value={this.props.name} changed={(text)=>{this.props.nameChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input label="Company" placeholder="Company" value={this.props.company} changed={(text)=>{this.props.companyChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input label="Phone Number" placeholder="Phone Number" value={this.props.phone} changed={(text)=>{this.props.phoneChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input label="Email Address" placeholder="Email Address" value={this.props.email} changed={(text)=>{this.props.emailChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input secure label="Password" placeholder="Password" value={this.props.password} changed={(text)=>{this.props.passwordChanged(text)}}/>
        </CardItem>

        <CardItem>
          <Input secure label="Confirm Password" placeholder="Confirm Password" value={this.props.passwordConfirmation} changed={(text)=>{this.props.confirmationChanged(text)}}/>
        </CardItem>

        <CardItem>
          {this.props.loading ? <Spinner size="large" /> : null}
          <Button content="Sign Up" pressed={this.props.signUpUser.bind(this, this.props.email, this.props.password)}/>
        </CardItem>
        {this.props.signedUp ? <Text style={{color: 'green'}}>Congrats, your account was successfully created!</Text> : null}
        {this.props.error ? <Text style={{color: 'red'}}>{this.props.error.message}</Text> : null}
      </Card>
    )
  };
};

const mapStateToProps = (state) => {
  const {email, password, loading, error, signedUp, name, phone, company, passwordConfirmation} = state.auth;
  return{
    email: email,
    password: password,
    loading: loading,
    error: error,
    signedUp: signedUp,
    name: name,
    company: company,
    phone: phone,
    passwordConfirmation: passwordConfirmation
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    emailChanged: (text) => dispatch({type: 'emailChanged', value: text}),
    passwordChanged: (text) => dispatch({type: 'passwordChanged', value: text}),
    signUpUser: (email, password) => dispatch(signUp(email, password)),
    nameChanged: (text) => dispatch({type: 'nameChanged', value: text}),
    companyChanged: (text) => dispatch({type: 'companyChanged', value: text}),
    phoneChanged: (text) => dispatch({type: 'phoneChanged', value: text}),
    confirmationChanged: (text) => dispatch({type: 'confirmationChanged', value: text})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
