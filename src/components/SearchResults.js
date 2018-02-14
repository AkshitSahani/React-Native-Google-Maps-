import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, FlatList,TextInput, Text, Platform, TouchableOpacity} from 'react-native';
import {Card, CardItem, Button, Header} from './common';
import {search} from '../actionCreators/search';
import Map from './Map';
import ListItem from './ListItem';

class SearchResults extends Component {

  state = {
    expanded: false
  };

  expandResults = () => {
    return this.setState({expanded: !this.state.expanded});
  };

  render(){
    return(

   <Card>
     <Header title="Seekers"/>
     <Map height="100%" width="100%"/>
     <View style={
       this.state.expanded ? {position: 'absolute', backgroundColor: 'rgba(255,255,255, 1)', top: 0, left: 0, right: 0, zIndex: 10, height:'100%'} : {position: 'absolute', backgroundColor: 'rgba(255,255,255,0.8)', top:'50%', left: 0, right: 0, zIndex: 10}
     }>
       <TouchableOpacity onPress={()=>{this.expandResults()}}><Text style={{alignSelf: 'center', fontSize: 30}}>{this.state.expanded ? 'Down' : '^^'}</Text></TouchableOpacity>
       <FlatList
         data={this.props.users}
         keyExtractor={(item) => (item.name + item.capability)}
         renderItem={({item}) => {
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

//     <Card>
//       <Header title="Seekers"/>
//       <Map height="100%" width="100%"/>
//       <View style={{position: 'absolute', backgroundColor: 'white', bottom:0, left: 0, right: 0, zIndex: 10}}>
//         <FlatList
//           // style={{zIndex: 100}}
//           data={this.props.users}
//           keyExtractor={(item) => (item.name + item.capability)}
//           renderItem={({item}) => {
//               console.log('user:!!!!!',item);
//               return (
//                 <ListItem
//                   user={item}
//                 />
//               );
//             }
//           }
//         />
//       </View>
//     </Card>
//     );

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
