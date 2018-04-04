import React, {Component} from 'react';
import {Card, CardItem, Input, Navbar } from './common';
import {Actions} from 'react-native-router-flux';
import Map from './Map'

class SearchScreen extends Component {
  state = {
    navBarExpanded: false
  };

  toggleModal = () => {
   this.setState({
     navBarExpanded: !this.state.navBarExpanded
   })
 };

  componentWillReceiveProps = (props) => {
    this.toggleModal();
  };
  render(){
    return(
      <Card>
        <CardItem>
          <Input placeholder=" Capability" focussed={()=>{Actions.FiltersScreen();}} style={{backgroundColor: '#426E86', width: '100%'}}/>
        </CardItem>
        <CardItem>
          <Map height="100%" width="100%" />
        </CardItem>
        {this.state.navBarExpanded ? <Navbar navBarExpanded/> : null}
      </Card>
    )
  }
};

export default SearchScreen;
