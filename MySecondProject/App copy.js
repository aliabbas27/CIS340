import React from 'expo-status-bar';
import {Text} from 'react-native';

export default function MyApp() {

  function getFullName(fname,mName,lName){
    return fname + " " + mName + " " + lName;
  }


  const pet = "Dog";
  return (
    
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        My full name is {getFullName("Ali","None","Abbas")} {"\n"}
        I have a {pet}!
         </Text>
         
      
    
  );
}

