// import firebase from 'firebase';
// import 'firebase/firestore';

// import firebase from '@firebase/app';
// import '@firebase/firestore';

import firebase from 'firebase';
import 'firebase/firestore';

// import {Platform} from 'react-native';

export const capabilityChange = input => {
  console.log(input);
  return {type: 'capabilityChange', payload: input};
}

export const experienceChange = input => {
  return {type: 'experienceChange', payload: input};
}

export const rateChange = input => {
  return {type: 'rateChange', payload: input};
}

export const ratingChange = input => {
  console.log('ratingChange', input);
  return {type: 'ratingChange', payload: input};
}

export const insuranceChange = input => {
  return {type: 'insuranceChange', payload: input};
}

export const unionizedChange = input => {
  return {type: 'unionizedChange', payload: input};
}

export const locationChange = input => {
  console.log('GPS',input);
  return {type: 'locationChange', payload: input};
}

export const radiusChange = input => {
  console.log('GPS',input);
  return {type: 'radiusChange', payload: input};
}

export const availabilityMinChange = input => {
  return {type: 'availabilityMinChange', payload: input};
}

export const availabilityMaxChange = input => {
  return {type: 'availabilityMaxChange', payload: input};
}

// const degreesToRadians = degrees => {
//   return degrees * Math.PI / 180;
// }

// const isWithinMyRadius = (myLocation, userLocation, radius) => {
//   var earthRadiusKm = 6371;
//
//   var dLat = degreesToRadians(userLocation.latitude - myLocation.latitude);
//   var dLon = degreesToRadians(userLocation.longitude - myLocation.longitude);
//
//   lat1 = degreesToRadians(myLocation.latitude);
//   lat2 = degreesToRadians(userLocation.latitude);
//
//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//           Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(myLocation.latitude) * Math.cos(userLocation.latitude);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   console.log(`${earthRadiusKm * c} <= ${radius} ? `,earthRadiusKm * c <= radius)
//   return (earthRadiusKm * c <= radius);
// }
//
// export const refineSearch = (inputData) => {
//   return dispatch => {
//     const db = firebase.firestore();
//       let queryJson = {};
//       let filter = {};
//
//       console.log('inputData: ',inputData);
//       for (let prop in inputData) {
//         if (prop === "unionized" || inputData[prop]  ){
//           switch (prop) {
//
//             case "rating":
//                 filter[prop] = {
//                     "operator": ">=",
//                     "value": parseInt(inputData[prop])
//                 };
//
//                 break;
//             case "experience":
//                 filter[prop] = {
//                     "operator": ">=",
//                     "value": parseInt(inputData[prop])
//                 };
//                 break;
//             case "capability":
//                 queryJson[prop] = {
//                     "operator": "==",
//                     "value": inputData[prop].toLowerCase()
//                 };
//                 break;
//             case "rate":
//                 filter[prop] = {
//                     "operator": "<=",
//                     "value": parseInt(inputData[prop])
//                 };
//                 break;
//             case "coordinates":
//                 filter[prop] = {
//                     "value": inputData[prop]
//                 };
//                 break;
//             case "radius":
//                 filter[prop] = {
//                     "value": inputData[prop]
//                 };
//                 break;
//             case "insurance":
//                 queryJson[prop] = {
//                     "operator": "==",
//                     "value": inputData[prop]
//                 };
//                 break;
//             case "unionized":
//                 queryJson[prop] = {
//                     "operator": "==",
//                     "value": inputData[prop]
//                 };
//                 break;
//             case "availabilityMin":
//                 filter[prop] = {
//                     "operator": ">=",
//                     "value": inputData[prop]
//                 };
//                 break;
//             case "availabilityMax":
//                 filter[prop] = {
//                     "operator": "<=",
//                     "value": inputData[prop]
//                 };
//                 break;
//           }
//         }
//       }
//
//       console.log('queryJson: ', queryJson);
//       console.log('filter: ', filter);
//
//       let query = db.collection("users");
//
//       for (let prop in queryJson) {
//         console.log(prop + ' ' + queryJson[prop].operator + ' ' + queryJson[prop].value);
//         query = query.where(prop, queryJson[prop].operator, queryJson[prop].value);
//       }
//
//       const originalSend = XMLHttpRequest.prototype.send;
//       XMLHttpRequest.prototype.send = function(body) {
//         if (body === '') {
//           originalSend.call(this);
//         } else {
//           originalSend.call(this, body);
//         }
//       };
//
//       let rawQuery = [];
//       console.log('after query: ');
//       query.get().then(querySnapshot => {
//         console.log('!!!!!');
//         querySnapshot.forEach(doc => {
//
//             rawQuery.push(doc.data());
//         });
//
//           console.log('rawQuery: ', rawQuery);
//           let filteredUsers;
//           if (queryJson) {
//             filteredUsers = rawQuery.filter((user) => {
//
//                 for (prop in filter) {
//
//                   if (prop === 'coordinates') {
//                     if (!isWithinMyRadius(filter[prop].value,user[prop],filter.radius.value)) {
//                       return false;
//                     }
//                   } else if(prop !== 'radius' && !eval(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`)){
//                       return false;
//                   }
//                 }
//                 return true;
//             });
//           } else {
//             filteredUsers = rawQuery;
//           }
//
//           console.log('filteredUsers: ', filteredUsers);
//           return dispatch({type: "searchResult", payload: filteredUsers});
//
//       }).catch(function(error) {
//               console.log("notes: ", error);
//       });
//
//   };
// }
