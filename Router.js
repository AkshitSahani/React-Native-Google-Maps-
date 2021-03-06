import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import HomePage from './src/components/HomePage';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';
import SearchScreen from './src/components/SearchScreen';
import FiltersScreen from './src/components/FiltersScreen';
import SearchResults from './src/components/SearchResults';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="homepage">
          <Scene key="HomePage" component={HomePage} initial hideNavBar/>
        </Scene>
        <Scene key="main">
          <Scene key="SearchScreen" component={SearchScreen} leftTitle="Nav" onLeft={()=>{Actions.refresh({navBarExpanded: Math.random(1000000)});}} leftButtonTextStyle={{color: '#F9BA32'}}></Scene>
          <Scene key="FiltersScreen" component={FiltersScreen} tintColor='#F9BA32'/>
        </Scene>
        <Scene key="results">
          <Scene rightTitle="Refine" onRight={()=>{Actions.FiltersScreen();}} key="SearchResults" component={SearchResults} leftTitle="Nav" onLeft={()=>{Actions.refresh({navBarExpanded: Math.random(1000000)});}} leftButtonTextStyle={{color: '#F9BA32'}} rightButtonTextStyle={{color: '#F9BA32'}} ></Scene>
          <Scene key="FiltersScreen" component={FiltersScreen} tintColor='#F9BA32'/>
          <Scene key="LoginForm" component={LoginForm} />
        </Scene>

        <Scene key="auth">
          <Scene key="LoginForm" component={LoginForm} />
          <Scene key="SignUpForm" component={SignUpForm} />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
