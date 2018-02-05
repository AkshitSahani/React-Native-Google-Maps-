import React from 'react';
import {Button, Spinner, Header, Card, CardItem} from './common';
import {Actions} from 'react-native-router-flux'

const HomePage = () => {
  return(
    <Card>
      <Header title="Workorbe" />
      <Button content="Provider" pressed={()=>{Actions.main()}}/>
      <Button content="Seeker" />
    </Card>
  )
};

export default HomePage;
