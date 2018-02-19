import React from 'react';
import {Card, CardItem, Input } from './common';
import {Actions} from 'react-native-router-flux';
import Map from './Map'

const SearchScreen = () =>{
  return(
    <Card>
      <CardItem>
        <Input placeholder=" Capability" focussed={()=>{Actions.FiltersScreen();}} style={{backgroundColor: '#426E86', width: '100%'}}/>
      </CardItem>
      <CardItem>
        <Map height="100%" width="100%" />
      </CardItem>
    </Card>
  )
};

export default SearchScreen;
