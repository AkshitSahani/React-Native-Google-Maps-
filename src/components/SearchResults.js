import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, FlatList,TextInput, Text, Platform, TouchableOpacity, Image} from 'react-native';
import {Card, CardItem, Button} from './common';
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

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render(){

    let top = (Platform.OS === 'android' ? 55 : 63);

    if(this.props.users.length <= 1){
      top = 71;
    }

    let height = (100 - top);

    let blueBar;

    if(this.props.filters.rateMin !== 0 && this.props.filters.rateMax !== 100000000000000 && this.props.filters.availabilityMin !== "" && this.props.filters.availabilityMax !== ""){
      blueBar = <View style={{backgroundColor: '#426E86', position: 'absolute', top: 0, left: 0, zIndex: 100, width: '100%', height: 45}}>
                  {this.props.filters.capability === "" ? null : <Text style={{color: 'white', alignSelf: 'center'}}>{this.capitalize(this.props.filters.capability)}</Text>}
                  <Text style={{color: 'white', alignSelf: 'center'}}>${this.props.filters.rateMin} - ${this.props.filters.rateMax}</Text>
                  <Text style={{color: 'white', alignSelf: 'center'}}>{this.props.filters.availabilityMin} to {this.props.filters.availabilityMax}</Text>
                </View>
    }
    else if ((this.props.filters.rateMin === 0 || this.props.filters.rateMax === 100000000000000) && (this.props.filters.availabilityMin !== "" || this.props.filters.availabilityMax !== "")) {
      blueBar = <View style={{backgroundColor: '#426E86', position: 'absolute', top: 0, left: 0, zIndex: 100, width: '100%', height: 45}}>
                  {this.props.filters.capability === "" ? null : <Text style={{color: 'white', alignSelf: 'center'}}>{this.capitalize(this.props.filters.capability)}</Text>}
                  <Text style={{color: 'white', alignSelf: 'center'}}>{this.props.filters.availabilityMin === "" ? 'Any' : this.props.filters.availabilityMin} to {this.props.filters.availabilityMax === "" ? 'Any' : this.props.filters.availabilityMax}</Text>
                </View>
    }
    else if ((this.props.filters.rateMin !== 0 || this.props.filters.rateMax !== 100000000000000) && (this.props.filters.availabilityMin === "" || this.props.filters.availabilityMax === "")) {
      blueBar = <View style={{backgroundColor: '#426E86', position: 'absolute', top: 0, left: 0, zIndex: 100, width: '100%', height: 45}}>
                  {this.props.filters.capability === "" ? null : <Text style={{color: 'white', alignSelf: 'center'}}>{this.capitalize(this.props.filters.capability)}</Text>}
                  <Text style={{color: 'white', alignSelf: 'center'}}>${this.props.filters.rateMin === 0 ? 'Any' : this.props.filters.rateMin} - ${this.props.filters.rateMax === 100000000000000 ? "Any" : this.props.filters.rateMax}</Text>
                </View>
    }
    else if(this.props.filters.rateMin === 0 && this.props.filters.rateMax === 100000000000000 && this.props.filters.availabilityMin === "" && this.props.filters.availabilityMax === "" && this.props.filters.capability !== ""){
      blueBar = <View style={{backgroundColor: '#426E86', position: 'absolute', top: 0, left: 0, zIndex: 100, width: '100%', height: 45}}>
                  {this.props.filters.capability === "" ? null : <Text style={{color: 'white', alignSelf: 'center'}}>{this.capitalize(this.props.filters.capability)}</Text>}
                </View>
    }

    else {
      blueBar = null
    }
    // if(this.props.filters.rateMin === 0 && this.props.filters.rateMax === 100000000000000 && this.props.filters.availabilityMin === "" && this.props.filters.availabilityMax === ""){

    return(
      <Card>
       {this.state.expanded ? null : blueBar}
       <Map height="100%" width="100%"/>
       <View style={
         this.state.expanded ? {position: 'absolute', backgroundColor: 'rgba(255,255,255, 1)', top: 0, left: 0, right: 0, zIndex: 10, height:'100%'} : {position: 'absolute', backgroundColor: 'rgba(255,255,255,0.8)', top:''+top+'%', left: 0, right: 0, zIndex: 10, height: ''+height+'%'}
        }>
         <TouchableOpacity onPress={()=>{this.expandResults()}}>
           {this.state.expanded ? <Image source={{uri: 'https://torinit.com/assets/workorbe/Down-Arrow.png'}} style={{width: 20, height: 20, alignSelf:'center', marginBottom: 10, marginTop: 10}}/> :
                                  <Image source={{uri: 'https://torinit.com/assets/workorbe/Up-Arrow.png'}} style={{width: 20, height: 20, alignSelf:'center', marginBottom: 10, marginTop: 10}}/> }
         </TouchableOpacity>
         {this.state.expanded ? <Text style={{position: 'absolute', top:10, right: 10, fontSize: 16}}> Search Results ({this.props.users.length})</Text> : null}
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
  return ({
    filters:state.filters,
    users:state.search.users
  });
};

export default connect(mapStateToProps)(SearchResults);
