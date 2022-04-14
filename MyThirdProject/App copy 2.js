import React from 'react';
import {Text,Image, View } from 'react-native';

export default function MYDog() {

  let pic = {
    uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&psig=AOvVaw063_-WEkumjtXtE16Z4QgO&ust=1650055724674000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDTpd22lPcCFQAAAAAdAAAAABAE' }
  return (
    <View style = {{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Image source = {pic}
      style={{width: 200, height: 200}}
      />
    <Text>Hello, This is my Dog</Text>
    </View>
  );
}


