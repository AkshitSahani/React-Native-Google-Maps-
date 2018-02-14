// import firebase from 'firebase';
// import 'firebase/firestore';

// import firebase from '@firebase/app';
// import '@firebase/firestore';

import firebase from 'firebase';
import 'firebase/firestore';
import {Platform} from 'react-native';

const degreesToRadians = degrees => {
  return degrees * Math.PI / 180;
}

const isWithinMyRadius = (myLocation, userLocation, radius) => {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(userLocation.latitude - myLocation.latitude);
  const dLon = degreesToRadians(userLocation.longitude - myLocation.longitude);

  const lat1 = degreesToRadians(myLocation.latitude);
  const lat2 = degreesToRadians(userLocation.latitude);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(myLocation.latitude) * Math.cos(userLocation.latitude);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  console.log(`${earthRadiusKm * c} <= ${radius} ? `,earthRadiusKm * c <= radius)
  return (earthRadiusKm * c <= radius);
}

export const search = inputData => {
  return dispatch => {
    const db = firebase.firestore();
      let queryJson = {};
      let filter = {};

      console.log('inputData: ',inputData);

      for (let prop in inputData) {
        if (prop === "unionized" || inputData[prop]  ){
          switch (prop) {

            case "rating":
                filter[prop] = {
                    "operator": ">=",
                    "value": parseInt(inputData[prop])
                };

                break;
            case "experience":
                filter[prop] = {
                    "operator": ">=",
                    "value": parseInt(inputData[prop])
                };
                break;
            case "capability":
                queryJson[prop] = {
                    "operator": "==",
                    "value": inputData[prop].toLowerCase()
                };
                break;
            case "rate":
                filter[prop] = {
                    "operator": "<=",
                    "value": parseInt(inputData[prop])
                };
                break;
            case "coordinates":
                filter[prop] = {
                    "value": inputData[prop]
                };
                break;
            case "radius":
                filter[prop] = {
                    "value": inputData[prop]
                };
                break;
            case "insurance":
                queryJson[prop] = {
                    "operator": "==",
                    "value": inputData[prop]
                };
                break;
            case "unionized":
                queryJson[prop] = {
                    "operator": "==",
                    "value": inputData[prop]
                };
                break;
            case "availabilityMin":
                filter[prop] = {
                    "operator": ">=",
                    "value": inputData[prop]
                };
                break;
            case "availabilityMax":
                filter[prop] = {
                    "operator": "<=",
                    "value": inputData[prop]
                };
                break;
          }
        }
      }

      console.log('queryJson: ', queryJson);
      console.log('filter: ', filter);

      let query = db.collection("users");

      for (let prop in queryJson) {
        console.log(prop + ' ' + queryJson[prop].operator + ' ' + queryJson[prop].value);
        query = query.where(prop, queryJson[prop].operator, queryJson[prop].value);
      }

      const originalSend = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function(body) {
        if (body === '') {
          originalSend.call(this);
        } else {
          originalSend.call(this, body);
        }
      };

      let rawQuery = [];
      console.log('after query: ');
      query.get().then(querySnapshot => {
      console.log('!!!!!');
      querySnapshot.forEach(doc => {
        rawQuery.push(doc.data());
      });

      console.log('rawQuery: ', rawQuery);
      let filteredUsers;
      if (queryJson) {
        filteredUsers = rawQuery.filter((user) => {

          for (prop in filter) {

            if (prop === 'coordinates' || prop === 'radius') {
              console.log(`coordinates: ${user[prop]}: ${filter[prop].value}`);
            } else {
              console.log(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`,eval(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`));
            }

            if (prop === 'coordinates') {
              if (!isWithinMyRadius(filter[prop].value,user[prop],filter.radius.value)) {
                return false;
              }
            } else if(prop !== 'radius' && !eval(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`)){
              return false;
            }
          }
          return true;
        });
      } else {
        filteredUsers = rawQuery;
      }

      console.log('filteredUsers: ', filteredUsers);
      return dispatch({type: "searchResult", payload: filteredUsers});
    }).catch(function(error) {
      console.log("notes: ", error);
    });
  };
}
