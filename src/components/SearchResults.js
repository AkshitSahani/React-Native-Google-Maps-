import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, FlatList,TextInput, Text, Platform} from 'react-native';
import {Card, CardItem, Button, Header} from './common';
import {search} from '../actionCreators/search';
import Map from './Map';
import ListItem from './ListItem';

class SearchResults extends Component {

  render(){
    return(
    <Card>
      <Header title="Seekers"/>
      <Map height="100%" width="100%"/>
      <View style={{position: 'absolute', backgroundColor: 'white', bottom:0, left: 0, right: 0, zIndex: 10}}>
        <FlatList
          // style={{zIndex: 100}}
          data={this.props.users}
          keyExtractor={(item) => (item.name + item.capability)}
          renderItem={({item}) => {
              console.log('user:!!!!!',item);
              return (
                <ListItem
                  user={item}
                />
              );
            }
          }
        />
      </View>
    </Card>
    );
  }
}

const mapStateToProps = state => {
  // const {location, unionized, insurance, endDate, startDate, rating, rateMax, rateMin, capability, radius} = state.filters;
  console.log('users in search results: ',state.search);
  return ({
    filters:state.filters,
    users:state.search.users
  });
};

export default connect(mapStateToProps)(SearchResults);
