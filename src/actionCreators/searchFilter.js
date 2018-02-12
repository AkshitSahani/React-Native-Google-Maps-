// import firebase from 'firebase';
// import 'firebase/firestore';

// import firebase from '@firebase/app';
// import '@firebase/firestore';

import firebase from 'firebase';
import 'firebase/firestore';

import {Platform} from 'react-native';

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

export const radiusChange = input => {
  return {type: 'radiusChange', payload: input};
}

export const locationChange = input => {
  return {type: 'locationChange', payload: input};
}

export const availabilityMinChange = input => {
  return {type: 'availabilityMinChange', payload: input};
}

export const availabilityMaxChange = input => {
  return {type: 'availabilityMaxChange', payload: input};
}

export const refineSearch = (inputData) => {
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
                    "value": inputData[prop]
                };
                break;
            case "rate":
                filter[prop] = {
                    "operator": "<=",
                    "value": parseInt(inputData[prop])
                };
                break;
            case "address":
                filter[prop] = {
                    "operator": "==",
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
                    console.log('!!!!!!!!!!');
                    console.log(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`,eval(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`));

                  if(!eval(`${user[prop]} ${filter[prop].operator} ${filter[prop].value}`)){
                      return false;
                  }
                }
                return true;
            });
          } else {
            filteredUsers = rawQuery;
          }

          console.log('filteredUsers: ', filteredUsers);
          return dispatch({type: "refineSearch", payload: filteredUsers});

      }).catch(function(error) {
              console.log("notes: ", error);
      });

  };
}
